import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, Input,
  OnChanges, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Question} from '../../models/question';
import {Questionnaire} from '../../models/questionnaire';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatTable} from '@angular/material';
import {QRadioBtnEditComponent} from '../question-edit-dialog/q-radio-btn-edit/q-radio-btn-edit.component';
import {QInputEditComponent} from '../question-edit-dialog/q-input-edit/q-input-edit.component';
import {QSliderEditComponent} from '../question-edit-dialog/q-slider-edit/q-slider-edit.component';
import {QSelectEditComponent} from '../question-edit-dialog/q-select-edit/q-select-edit.component';
import {ComponentType} from '@angular/cdk/portal/typings/portal';
import {ActivatedRoute} from '@angular/router';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {filter, find, first} from 'rxjs/operators';
import {AlertService} from '../../services/alert.service';
import {AuthService} from '../../services/auth.service';
import {errorObject} from 'rxjs/internal-compatibility';
import {QSliderShowComponent} from '../question-show-dialog/q-slider-show/q-slider-show.component';
import {QCheckBoxEditComponent} from '../question-edit-dialog/q-check-box-edit/q-check-box-edit.component';
import {QSelectShowComponent} from '../question-show-dialog/q-select-show/q-select-show.component';
import {QDateTimeEditComponent} from '../question-edit-dialog/q-date-time-edit/q-date-time-edit.component';
import {QRadioBtnShowComponent} from '../question-show-dialog/q-radio-btn-show/q-radio-btn-show.component';
import {QInputShowComponent} from '../question-show-dialog/q-input-show/q-input-show.component';
import {QDateTimeShowComponent} from '../question-show-dialog/q-date-time-show/q-date-time-show.component';
import {QCheckBoxShowComponent} from '../question-show-dialog/q-check-box-show/q-check-box-show.component';

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
    QRadioBtnEditComponent
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
  questions = [];
  questionnaires = [];
  idQuestionnaire: number;
  loading = false;
  submitted = false;
  modification = false;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private resolver: ComponentFactoryResolver,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      isAnonymous: [false]
    });

    this.idQuestionnaire = this.route.snapshot.params['id'];
    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestionnaire !== undefined) {
      this.modification = true;
      this.questionnaireService.getById(this.idQuestionnaire)
          .subscribe(questionnaire => {
            this.questionnaire = questionnaire;
            this.loadAllQuestions(questionnaire.id);
            this.questionnaireForm = this.fb.group({
              titre: [questionnaire.titre, Validators.required],
              description: [questionnaire.description, Validators.required],
              isAnonymous: [questionnaire.isAnonymous]
            });
          });
    }
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.questionnaireForm.controls;
  }


  ngOnChanges() {}

  onNewQuestionnaire() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.questionnaireForm.invalid) {
      return;
    }

    this.loading = true;
    // enregistre le nouveau questionnaire
    this.questionnaireForm.value.idUser = this.authService.currentUserValue.id;
    if (this.modification) {
      this.questionnaireService.update(this.idQuestionnaire, this.questionnaireForm.value)
          .pipe(first())
          .subscribe(
              data => {
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
      );
    } else {
      this.questionnaireService.register(this.questionnaireForm.value)
          .pipe(first())
          .subscribe(
              data => {
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
          );
    }
    this.loading = false;
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
      if (result.event.startsWith('Add')) {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
      this.updateRowData(result.data);
    } else if (result.event === 'Delete') {
      this.deleteRowData(result.data);
    }
    });
  }

  loadAllQuestions(idQuestionnaire: number) {
    const q1 = new Question();
    q1.id = 1;
    q1.order = 1;
    q1.titre = 'Titre 1';
    q1.isRequired = true;
    q1.typeQuestion = 'Question à choix multiples';
    const q2 = new Question();
    q2.id = 2;
    q2.order = 2;
    q2.titre = 'Titre 2';
    q2.isRequired = false;
    q2.typeQuestion = 'Question boutons radio';
    this.questions.push(q1);
    this.questions.push(q2);
    // this.questionService.getAll(idQuestionnaire)
    //     .pipe(first())
    //     .subscribe(questions => this.questions = questions);
  }

  showQuestion(id: number) {

  }

  editQuestion(id: number) {

  }

  deleteQuestion(id: number) {

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
    // this.addArray(this.questionnaire.questions, rowObj );
    this.addArray(this.dataSource, rowObj);
    // @ts-ignore
    /*this.dataSource.push({
      idQuestion: rowObj.idQuestion,
      libelle: rowObj.libelle,
      isRequired: rowObj.isRequired,
      type: rowObj.type,
      propositions: rowObj.propositions,
      order : rowObj.order
    }); */
    this.table.renderRows();
    // console.log(this.questionnaire.questions);
  }
  getQuestionById(question, id) {
    return question.idQuestion === id;
  }
  updateRowData(rowObj) {
    // this.dataSource = this.dataSource.filter((value, key) => {
    //   if (value.idQuestion === rowObj.idQuestion) {
    //     value.libelle = rowObj.libelle;
    //     value.isRequired = rowObj.isRequired;
    //     value.type = rowObj.type;
    //     value.propositions = rowObj.propositions;
    //    // const qst = this.questionnaire.questions.find(question =>
    //       //  this.getQuestionById(rowObj, value.idQuestion ));
    //   //  qst.setQuestion(rowObj.libelle, rowObj.type, rowObj.isRequired, rowObj.propositions);
    //   }
    //   return true;
    // });
  }
  deleteRowData(rowObj) {
    // this.dataSource = this.dataSource.filter((value, key) => {
    //   // tslint:disable-next-line:no-unused-expression
    //    return rowObj.idQuestion !== value.idQuestion;
    // });
    // // this.questionnaire.questions = this.dataSource ;
  }
  createFinalQuestionnaire() {
    const valueQuestionnaire = JSON.stringify(this.questionnaireForm.value);
    const obj =  JSON.parse(valueQuestionnaire);
   // this.questionnaire = new Questionnaire(1, obj.labelQuestionnaire, this.questionnaire.questions );
    console.log('finalQestionnaire');
    console.log(this.questionnaire);
  }

}
