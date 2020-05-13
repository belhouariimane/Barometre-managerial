import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../../model/question';
import {QInputEditComponent} from '../../question-edit/q-input-edit/q-input-edit.component';

@Component({
  selector: 'app-q-input-show',
  templateUrl: './q-input-show.component.html',
  styleUrls: ['./q-input-show.component.scss']
})
export class QInputShowComponent implements OnInit {
  @Output() output = new EventEmitter();
  @Input() question ;
  action: string;
  localData: any;
  constructor(
      public dialogRef: MatDialogRef<QInputEditComponent>,
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
