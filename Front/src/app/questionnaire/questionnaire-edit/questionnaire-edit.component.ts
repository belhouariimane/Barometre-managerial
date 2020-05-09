import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {QCheckBoxEditComponent} from '../question-edit/q-check-box-edit/q-check-box-edit.component';
import {QCheckBoxShowComponent} from '../question-show/q-check-box-show/q-check-box-show.component';
import {Question} from '../model/question';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss'],
  entryComponents: [QCheckBoxEditComponent, QCheckBoxShowComponent]

})
export class QuestionnaireEditComponent implements OnInit, OnDestroy {

  @ViewChild('EditQuestionCheckBox', {static: false, read: ViewContainerRef }) containerEdit;
  @ViewChild('ShowQuestionCheckBox', {static: false, read: ViewContainerRef }) containerShow;
  question: Question  ;
  questionToSendShow: Question;
  componentRef: ComponentRef<Component>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {

  }
  createComponent(type, quest?: Question) {
    this.containerEdit.clear();
    this.containerShow.clear();

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
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  sendToShow(quest: Question) {
    this.questionToSendShow = quest;
  }
}
