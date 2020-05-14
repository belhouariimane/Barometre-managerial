import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, Input,
  OnChanges, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {QCheckBoxEditComponent} from '../question-edit/q-check-box-edit/q-check-box-edit.component';
import {QCheckBoxShowComponent} from '../question-show/q-check-box-show/q-check-box-show.component';
import {Question} from '../model/question';
import {Questionnaire} from '../model/questionnaire';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatTable} from '@angular/material';
import {QRadioBtnEditComponent} from '../question-edit/q-radio-btn-edit/q-radio-btn-edit.component';
import {QInputEditComponent} from '../question-edit/q-input-edit/q-input-edit.component';
import {QSliderEditComponent} from '../question-edit/q-slider-edit/q-slider-edit.component';
import {QSelectEditComponent} from '../question-edit/q-select-edit/q-select-edit.component';
import {ComponentType} from '@angular/cdk/portal/typings/portal';
import {QDateTimeEditComponent} from '../question-edit/q-date-time-edit/q-date-time-edit.component';
import {QDateTimeShowComponent} from '../question-show/q-date-time-show/q-date-time-show.component';
import {QRadioBtnShowComponent} from '../question-show/q-radio-btn-show/q-radio-btn-show.component';
import {QSelectShowComponent} from '../question-show/q-select-show/q-select-show.component';
import {QSliderShowComponent} from '../question-show/q-slider-show/q-slider-show.component';
import {QInputShowComponent} from '../question-show/q-input-show/q-input-show.component';
import {DeleteQuestionComponent} from '../delete-question/delete-question.component';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss'],
  entryComponents: [QRadioBtnShowComponent,
    QCheckBoxShowComponent,
    QSliderShowComponent,
    QDateTimeShowComponent,
    QInputShowComponent,
    QSelectShowComponent,
    QSelectEditComponent,
    QInputEditComponent,
    QDateTimeEditComponent,
    QSliderEditComponent,
    QCheckBoxEditComponent,
    QRadioBtnEditComponent,
    DeleteQuestionComponent
  ]

})
export class QuestionnaireEditComponent implements OnInit, OnChanges {
  question: Question  ;
  questionToSendShow: Question;
  componentRef: ComponentRef<Component>;
  questionnaire: Questionnaire;
  questionnaireForm: FormGroup;
  @Input() questionnaireIn: Questionnaire;
  displayedColumns: string[] = ['id', 'label', 'estObligatoire', 'type', 'propositions', 'action'];
  // @ts-ignore
  dataSource: Question[] = [] ;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  constructor(public dialog: MatDialog, private fb: FormBuilder, private resolver: ComponentFactoryResolver) {
    this.createForm();
    this.questionnaire = new Questionnaire(1, 'label questionnaire', []);
  }
  createForm() {
    this.questionnaireForm = this.fb.group({
      labelQuestionnaire: '',
      questionsArray: this.fb.array([
      ])
    });
  }
  ngOnInit() {
  }
  ngOnChanges() {

  }
  openDialog(action, obj): void {
    console.log(obj);
    obj.action = action;
    let dialogRef;
    let comp;
    if (action.startsWith('Add')) {
      comp = this.selectEditQuestion(action);
    } else if (action.startsWith('Show')) {
      comp = this.selectShowQuestion(obj.type);
    } else if (action.startsWith('Delete')) {
      comp =  this.selectShowQuestion(obj.type);
    }
    dialogRef = this.dialog.open( comp , {
      width: '700px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result.event.startsWith('Add')) {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
      this.updateRowData(result.data);
    } else if (result.event === 'Delete') {
      this.deleteRowData(result.data);
    }
    });
  }
  // @ts-ignore
  selectEditQuestion(action): ComponentType<ComponentType> {
    switch (action) {
      case 'AddCheckBox': {
        return QCheckBoxEditComponent;
        break;
      }
      case 'AddDateTimePicker': {
        return QDateTimeEditComponent;
        break;
      }
      case 'AddRadioBtn': {
        return QRadioBtnEditComponent;
        break;
      }
      case 'AddSelect': {
        return QSelectEditComponent;
        break;
      }
      case 'AddSlide': {
        return QSliderEditComponent;
        break;
      }
      case 'AddInput': {
        return QInputEditComponent;
        break;
      }
      default: {
        return QInputEditComponent;
        break;
      }
    }
  }
  // @ts-ignore
  selectShowQuestion(type): ComponentType<ComponentType> {
    console.log(type);
    switch (type) {
      case 'CheckBox': {
        return QCheckBoxShowComponent;
        break;
      }
      case 'dateTimePicker': {
        return QDateTimeShowComponent;
        break;
      }
      case 'radioBtn': {
        return QRadioBtnShowComponent;
        break;
      }
      case 'select': {
        return QSelectShowComponent;
        break;
      }
      case 'slide': {
        return QSliderShowComponent;
        break;
      }
      case 'Input': {
        return QInputShowComponent;
        break;
      }
      default: {
        return QInputShowComponent;
        break;
      }
    }
  }

  addArray(tab , val) {
    if (val !== undefined && !tab.includes(val) ) {
      tab.push(val);
    }
  }
  addRowData(rowObj) {
    this.addArray(this.questionnaire.questions, rowObj );
    // @ts-ignore
    this.dataSource.push({
      idQuestion: rowObj.idQuestion,
      libelle: rowObj.libelle,
      isRequired: rowObj.isRequired,
      type: rowObj.type,
      propositions: rowObj.propositions,
      order : rowObj.order
    });
    this.table.renderRows();
    console.log(this.questionnaire.questions);
  }
  getQuestionById(question, id) {
    return question.idQuestion === id;
  }
  updateRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.idQuestion === rowObj.idQuestion) {
        value.libelle = rowObj.libelle;
        value.isRequired = rowObj.isRequired;
        value.type = rowObj.type;
        value.propositions = rowObj.propositions;
        const qst = this.questionnaire.questions.find(question =>
            this.getQuestionById(rowObj, value.idQuestion ));
        qst.setQuestion(rowObj.libelle, rowObj.type, rowObj.isRequired, rowObj.propositions);
      }
      return true;
    });
  }
  deleteRowData(rowObj) {
    console.log('on Delete');
    console.log(rowObj);
    this.dataSource = this.dataSource.filter((value, key) => {
      // tslint:disable-next-line:no-unused-expression
       return rowObj.idQuestion !== value.idQuestion;
    });
    this.questionnaire.questions = this.dataSource ;
  }
  createFinalQuestionnaire() {
    const valueQuestionnaire = JSON.stringify(this.questionnaireForm.value);
    const obj =  JSON.parse(valueQuestionnaire);
    this.questionnaire = new Questionnaire(1, obj.labelQuestionnaire, this.questionnaire.questions );
    console.log('finalQestionnaire');
    console.log(this.questionnaire);
  }

}
