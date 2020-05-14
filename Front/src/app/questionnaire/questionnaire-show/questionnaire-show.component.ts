import {Component, Input, OnInit} from '@angular/core';
import {ArrayType} from '@angular/compiler';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questionnaire-show',
  templateUrl: './questionnaire-show.component.html',
  styleUrls: ['./questionnaire-show.component.scss']
})
export class QuestionnaireShowComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
  }
}
