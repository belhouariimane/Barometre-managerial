import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional, Output} from '@angular/core';
import {Question} from '../../model/question';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-q-input-edit',
  templateUrl: './q-input-edit.component.html',
  styleUrls: ['./q-input-edit.component.scss']
})
export class QInputEditComponent implements OnChanges {

  @Input() questionIn: Question;
  @Output() output = new EventEmitter<Question>();
  questionForm: FormGroup;
  reponses: string[] = ['Oui', 'Non'];
  questionOut: Question;
  action: string;
  localData: any;
  messageSnackBar = '' ;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<QInputEditComponent>,
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
  get qForm() { return this.questionForm.controls; }

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
    this.dialogRef.close({event: 'Cancel'});
  }
  createForm() {
    this.questionForm = this.fb.group({
      labelQuestion: ['', Validators.required],
      estObligatoire: ['', Validators.required]
    });
  }
  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.questionForm.reset({
      labelQuestion: this.questionIn.libelle,
      estObligatoire: this.questionIn.isRequired
    });
  }
  toBoolean(value) {
    return value !== 'Non';
  }

  onCreateFinalQuetion() {
    const valueQuestion = JSON.stringify(this.questionForm.value);
    const obj =  JSON.parse(valueQuestion);
    this.questionOut = new Question(Date.now() , obj.labelQuestion, 'input', this.toBoolean(obj.estObligatoire), [], 1);
    this.data = this.questionOut;
    this.output.emit(this.questionOut);
    this.messageSnackBar = 'ajout OK';
  }

}
