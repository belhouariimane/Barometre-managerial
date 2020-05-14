import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ArrayType} from '@angular/compiler';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../model/question';
import {QCheckBoxShowComponent} from '../question-show/q-check-box-show/q-check-box-show.component';
import {QDateTimeShowComponent} from '../question-show/q-date-time-show/q-date-time-show.component';
import {QRadioBtnShowComponent} from '../question-show/q-radio-btn-show/q-radio-btn-show.component';
import {QSelectShowComponent} from '../question-show/q-select-show/q-select-show.component';
import {QSliderShowComponent} from '../question-show/q-slider-show/q-slider-show.component';
import {QInputShowComponent} from '../question-show/q-input-show/q-input-show.component';

@Component({
  selector: 'app-questionnaire-show',
  templateUrl: './questionnaire-show.component.html',
  styleUrls: ['./questionnaire-show.component.scss']
})
export class QuestionnaireShowComponent implements OnInit {
  @ViewChild('ShowQuestionCheckBox', {static: false, read: ViewContainerRef }) containerShowQuestionCheckBox;
  @ViewChild('ShowQuestionDateTime', {static: false, read: ViewContainerRef }) containerShowQuestionDateTime;
  @ViewChild('ShowQuestionInput', {static: false, read: ViewContainerRef }) containerShowQuestionInput;
  @ViewChild('ShowQuestionRadioBtn', {static: false, read: ViewContainerRef }) containerShowQuestionRadioBtn;
  @ViewChild('ShowQuestionSelect', {static: false, read: ViewContainerRef }) containerShowQuestionSelect;
  componentRef: ComponentRef<Component>;

  constructor(private resolver: ComponentFactoryResolver) {}
  ngOnInit(): void {
  }
  createComponent(quest: Question) {
    // this.containerEdit.clear();
    this.containerShow.clear();
    let factory ;

    switch (quest.type) {
      case 'CheckBox': {
        factory = this.resolver.resolveComponentFactory(QCheckBoxShowComponent);
      }
      case 'dateTimePicker': {
        factory = this.resolver.resolveComponentFactory(QDateTimeShowComponent);
      }
      case 'radioBtn': {
        factory = this.resolver.resolveComponentFactory(QRadioBtnShowComponent);
      }
      case 'select': {
        factory = this.resolver.resolveComponentFactory(QSelectShowComponent);
      }
      case 'slide': {
        factory = this.resolver.resolveComponentFactory(QSliderShowComponent);
      }
      case 'Input': {
        factory = this.resolver.resolveComponentFactory(QInputShowComponent);
      }
      default: {
        factory = this.resolver.resolveComponentFactory(QInputShowComponent);
      }
    }
    this.componentRef = this.containerShow.createComponent(factory);

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
}
