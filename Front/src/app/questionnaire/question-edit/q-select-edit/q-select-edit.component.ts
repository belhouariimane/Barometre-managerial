import {Component, EventEmitter, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {Question} from '../../model/question';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PropositionQuestion} from '../../model/propositionQuestion';

@Component({
  selector: 'app-q-select-edit',
  templateUrl: './q-select-edit.component.html',
  styleUrls: ['./q-select-edit.component.scss']
})
export class QSelectEditComponent implements OnInit {

  @Input() questionIn: Question;
  @Output() output = new EventEmitter<Question>();
  questionForm: FormGroup;
  reponses: string[] = ['Oui', 'Non'];
  questionOut: Question;
  action: string;
  localData: any;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<QSelectEditComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: Question) {
    this.createForm();
    this.localData = {...data};
    this.action = this.localData.action;
  }

  doAction() {
    this.onCreateFinalQuetion();
    this.dialogRef.close({event: this.action, data: this.questionOut});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }
  createForm() {
    this.questionForm = this.fb.group({
      labelQuestion: '',
      estObligatoire: '',
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
      labelQuestion: this.questionIn.libelle,
      estObligatoire: this.questionIn.isRequired,
      proposition1: this.questionIn.propositions[0],
      proposition2: this.questionIn.propositions[1]
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
    return this.propositionsArray.push(this.fb.group(new PropositionQuestion('', '')));
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

    this.questionOut = new Question(Date.now() , obj.labelQuestion, 'select', this.toBoolean(obj.estObligatoire), tabProp, 1);
    this.data = this.questionOut;
    this.output.emit(this.questionOut);
  }

}
