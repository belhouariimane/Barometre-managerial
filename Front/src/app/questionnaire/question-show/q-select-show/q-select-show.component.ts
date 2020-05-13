import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-q-select-show',
  templateUrl: './q-select-show.component.html',
  styleUrls: ['./q-select-show.component.scss']
})
export class QSelectShowComponent implements OnInit {
  @Output() output = new EventEmitter();
  @Input() question ;
  action: string;
  localData: any;
  constructor(
      public dialogRef: MatDialogRef<QSelectShowComponent>,
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
