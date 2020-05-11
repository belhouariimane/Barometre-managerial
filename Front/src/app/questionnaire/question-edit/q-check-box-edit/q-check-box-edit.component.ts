import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {PropositionQuestion} from '../../model/propositionQuestion';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Question} from '../../model/question';
import {QuestionnaireEditComponent} from '../../questionnaire-edit/questionnaire-edit.component';

@Component({
  selector: 'app-q-check-box-edit',
  templateUrl: './q-check-box-edit.component.html',
  styleUrls: ['./q-check-box-edit.component.scss']
})
export class QCheckBoxEditComponent implements OnChanges {

  @Input() questionIn: Question;
  questionForm: FormGroup;
  showpropositionForm: boolean;
  reponses: string[] = ['Oui', 'Non'];
  @Input() type = 'edit';
  @Output() output = new EventEmitter<Question>();
  questionOut: Question;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.questionForm = this.fb.group({
      labelQuestion: '',
      proposition1: '' ,
      proposition2: '',
      estObligatoire: '',
      propositionsArray: this.fb.array([
      ])
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.questionForm.reset({
      labelQuestion: this.questionIn.libelle,
      estObligatoire: this.questionIn.isRequired,
      proposition1: this.questionIn.propositions[0],
      proposition2: this.questionIn.propositions[1],
    });
    this.setpropositions(this.questionIn.propositions);
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
    return value !== 'Non';
  }

  addArray(tab , val) {
    if (val !== undefined && !tab.includes(val) ) {
      tab.push(val);
    }
  }

  onCreateFinalQuetion() {

      const valueQuestion = JSON.stringify(this.questionForm.value);
      const obj =  JSON.parse(valueQuestion);
      const tabProp = [ ];
      this.addArray( tabProp, obj.proposition1 );
      this.addArray( tabProp, obj.proposition2);

      for (let i = 0; i < obj.propositionsArray.length; i++) {
          this.addArray(tabProp , obj.propositionsArray[i].valeur);
      }

      this.questionOut = new Question(1, obj.labelQuestion, 'CheckBox', this.toBoolean(obj.estObligatoire), tabProp, 1);
      this.output.emit(this.questionOut);
      console.log(this.questionOut);
  }
}
