import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PropositionQuestion} from '../../model/propositionQuestion';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Question} from '../../model/question';

@Component({
  selector: 'app-q-check-box-edit',
  templateUrl: './q-check-box-edit.component.html',
  styleUrls: ['./q-check-box-edit.component.scss']
})
export class QCheckBoxEditComponent implements OnChanges {

  @Input() question: Question;
  questionForm: FormGroup;
  showpropositionForm: boolean;
  tabProp: string[] = [];
  estObligatoire: string;
  reponses: string[] = ['Oui', 'Non'];
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.questionForm = this.fb.group({
      labelQuestion: '',
      proposition1: '' ,
      proposition2: '',
      propositionsArray: this.fb.array([
      ])
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.questionForm.reset({
      labelQuestion: this.question.libelle,
      proposition1: this.question.propositions[0],
      proposition2: this.question.propositions[1],
    });
    this.setpropositions(this.question.propositions);
  }

  get propositionsArray(): FormArray {
    return this.questionForm.get('propositionsArray') as FormArray;
  }

  setpropositions(propositions: string[]) {
    const propositionsFA = this.fb.group(propositions);
    this.questionForm.setControl('propositionsArray', propositionsFA);
  }

  addproposition() {
    this.propositionsArray.push(this.fb.group(new PropositionQuestion('', '')));
  }
  removeproposition(i: number) {
    this.propositionsArray.removeAt(i);
  }

  toBoolean(value) {
    console.log(value);
    return value !== 'Non';
  }
  onCreateFinalQuetion() {

      const valueQuestion = JSON.stringify(this.questionForm.value);
      const obj =  JSON.parse(valueQuestion);

      if (obj.proposition1 !== undefined &&  obj.proposition2 !== undefined) {
        if (!this.tabProp.includes(obj.proposition1) && !this.tabProp.includes(obj.proposition2)) {
          this.tabProp.push(obj.proposition1);
          this.tabProp.push(obj.proposition2);
        }
      }

      for (let i = 0; i < obj.propositionsArray.length; i++) {
        if (!this.tabProp.includes(obj.proposition1) && obj.proposition1 !== undefined) {
          this.tabProp.push(obj.propositionsArray[i].valeur);
        }
      }

      this.question = new Question(1, obj.labelQuestion, 'CheckBox', this.toBoolean(this.estObligatoire), this.tabProp, 1);
      console.log(this.question);
  }
}
