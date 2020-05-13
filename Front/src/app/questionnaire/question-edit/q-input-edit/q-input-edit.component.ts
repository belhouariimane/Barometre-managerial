import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional, Output} from '@angular/core';
import {Question} from '../../model/question';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<QInputEditComponent>,
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
      estObligatoire: ''
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
  }

}
