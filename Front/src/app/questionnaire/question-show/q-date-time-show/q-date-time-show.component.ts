import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../../model/question';
import {QDateTimeEditComponent} from '../../question-edit/q-date-time-edit/q-date-time-edit.component';

@Component({
  selector: 'app-q-date-time-show',
  templateUrl: './q-date-time-show.component.html',
  styleUrls: ['./q-date-time-show.component.scss']
})
export class QDateTimeShowComponent implements OnInit {

  @Output() output = new EventEmitter();
  @Input() question ;
  constructor(
      public dialogRef: MatDialogRef<QDateTimeEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }

}
