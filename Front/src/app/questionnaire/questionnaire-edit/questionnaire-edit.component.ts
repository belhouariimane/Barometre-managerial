import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnChanges, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {QCheckBoxEditComponent} from '../question-edit/q-check-box-edit/q-check-box-edit.component';
import {QCheckBoxShowComponent} from '../question-show/q-check-box-show/q-check-box-show.component';
import {Question} from '../model/question';
import {async} from 'rxjs/internal/scheduler/async';
import {Questionnaire} from '../model/questionnaire';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {PropositionQuestion} from '../model/propositionQuestion';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss'],
  entryComponents: [QCheckBoxEditComponent, QCheckBoxShowComponent]

})
export class QuestionnaireEditComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('EditQuestionCheckBox', {static: false, read: ViewContainerRef }) containerEdit;
  @ViewChild('ShowQuestionCheckBox', {static: false, read: ViewContainerRef }) containerShow;
  question: Question  ;
  questionToSendShow: Question;
  componentRef: ComponentRef<Component>;
  questionnaire: Questionnaire;
  createdQuestion: Question = new Question(1,"",'check',true,[],1);
  questionnaireForm: FormGroup;
  showQuestionForm: boolean;

  constructor(private fb: FormBuilder, private resolver: ComponentFactoryResolver) {
    this.createForm();
    //this.questionnaire = new Questionnaire(1,'label questionnaire',[]);
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
    this.rebuildForm();
  }
  rebuildForm() {
    this.questionnaireForm.reset({
      labelQuestionnaire: this.questionnaire.libelleQuestionnaire,
    });
    this.setQuestions(this.questionnaire.questions);

  }
  get questionsArray(): FormArray {
    return this.questionnaireForm.get('questionsArray') as FormArray;

  }

  setQuestions(questions: Question[]) {
    const questionsFA = this.fb.group(questions);
    this.questionnaireForm.setControl('questionsArray', questionsFA);

  }

  addQuestion() {
    this.questionsArray.push(this.fb.group(this.createdQuestion));

  }
  removeQuestion(i: number) {
    this.questionsArray.removeAt(i);
  }
  createComponent(type, quest?: Question) {
    //this.containerEdit.clear();
    //this.containerShow.clear();

    if (type !== 'edit') {
      const factory = this.resolver.resolveComponentFactory(QCheckBoxShowComponent);
      this.componentRef = this.containerShow.createComponent(factory);
    } else {
      const factory = this.resolver.resolveComponentFactory(QCheckBoxEditComponent);
      this.componentRef = this.containerEdit.createComponent(factory);
    }
    // @ts-ignore
    this.componentRef.instance.output.subscribe(event => this.question = event);
    // @ts-ignore
    this.componentRef.instance.type = type;
    // @ts-ignore
    this.componentRef.instance.question = this.question;
    this.questionnaire.questions.push(this.question);
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  sendToShow(quest: Question) {
    this.questionToSendShow = quest;

  }
  addArray(tab , val) {
    if (val !== undefined && !tab.includes(val) ) {
      tab.push(val);
    }
  }
  createFinalQuestionnaire() {
    const valueQuestionnaire = JSON.stringify(this.questionnaireForm.value);
    const obj =  JSON.parse(valueQuestionnaire);

    const tabQuestion = [];
    for (let i = 0; i < obj.questionsArray.length; i++) {
      this.addArray(tabQuestion , obj.questionsArray[i].valeur);
    }
    this.questionnaire = new Questionnaire(1, obj.labelQuestionnaire, tabQuestion );
  }
  getQuestion(quest: Question) {
    this.createdQuestion = quest;
  }

}
