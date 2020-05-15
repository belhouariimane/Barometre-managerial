import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QCheckBoxEditComponent} from '../../question-edit-dialog/q-check-box-edit/q-check-box-edit.component';

@Component({
  selector: 'app-q-check-box-show',
  templateUrl: './q-check-box-show.component.html',
  styleUrls: ['./q-check-box-show.component.scss']
})
export class QCheckBoxShowComponent implements OnInit {
  @Output() output = new EventEmitter();
  @Input() question ;
  action: string;
  localData: any;

  constructor(
      public dialogRef: MatDialogRef<QCheckBoxEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {
    this.localData = {...data};
    this.action = this.localData.action;
  }


  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }
  doAction() {
    this.dialogRef.close({event: this.action, data: this.data});
  }
  ngOnInit() {
    console.log(this.data);
  }

}
