import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ArrayType} from '@angular/compiler';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../model/question';
import {QCheckBoxShowComponent} from '../question-show-dialog/q-check-box-show/q-check-box-show.component';
import {QDateTimeShowComponent} from '../question-show-dialog/q-date-time-show/q-date-time-show.component';
import {QRadioBtnShowComponent} from '../question-show-dialog/q-radio-btn-show/q-radio-btn-show.component';
import {QSelectShowComponent} from '../question-show-dialog/q-select-show/q-select-show.component';
import {QSliderShowComponent} from '../question-show-dialog/q-slider-show/q-slider-show.component';
import {QInputShowComponent} from '../question-show-dialog/q-input-show/q-input-show.component';
import {Questionnaire} from '../model/questionnaire';

@Component({
  selector: 'app-questionnaire-show',
  templateUrl: './questionnaire-show.component.html',
  styleUrls: ['./questionnaire-show.component.scss']
})
export class QuestionnaireShowComponent implements OnInit {
  public questionnaire: Questionnaire;
  constructor() {}

  ngOnInit(): void {
    const question1 = new Question(1, 'question1', 'CheckBox', true, ['prop1', 'prop2'], 1);
    const question2 = new Question(2, 'question2', 'Input', true, [], 2);

    this.questionnaire = new Questionnaire(1, 'questionnaire label', [question1,question2]);
    console.log(this.questionnaire);
  }
}
