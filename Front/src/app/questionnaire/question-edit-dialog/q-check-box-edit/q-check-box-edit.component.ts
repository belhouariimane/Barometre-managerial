import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional, Output} from '@angular/core';
import {PropositionQuestion} from '../../model/propositionQuestion';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../model/question';
import {QuestionnaireEditComponent} from '../../questionnaire-edit/questionnaire-edit.component';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-q-check-box-edit',
  templateUrl: './q-check-box-edit.component.html',
  styleUrls: ['./q-check-box-edit.component.scss']
})
export class QCheckBoxEditComponent implements  OnChanges {

  @Input() questionIn: Question;
  questionForm: FormGroup;
  showpropositionForm: boolean;
  reponses: string[] = ['Oui', 'Non'];
  @Input() type = 'edit';
  @Output() output = new EventEmitter<Question>();
  questionOut: Question;
  action: string;
  localData: any;
  messageSnackBar = '' ;
  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<QCheckBoxEditComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: Question) {
    this.createForm();
    this.localData = {...data};
    this.action = this.localData.action;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  doAction() {
    // stop here if form is invalid
    if (this.questionForm.invalid) {
      this.messageSnackBar = 'Ajout de question a échoué ';
      this.closeDialog();
      return;
    }
    this.onCreateFinalQuetion();
    this.dialogRef.close({event: this.action, data: this.questionOut});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Fermer'});
  }

  createForm() {
    this.questionForm = this.fb.group({
      labelQuestion: ['', Validators.required],
      proposition1: ['', Validators.required],
      proposition2: ['', Validators.required],
      estObligatoire: ['', Validators.required],
      propositionsArray: this.fb.array([
      ])
    });
  }
  get qForm() { return this.questionForm.controls; }


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

    this.questionOut = new Question(Date.now() , obj.labelQuestion, 'CheckBox', this.toBoolean(obj.estObligatoire), tabProp, 1);
    this.data = this.questionOut;
    this.output.emit(this.questionOut);
    this.messageSnackBar = 'ajout OK';
  }

}
