import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-q-radio-btn-show',
  templateUrl: './q-radio-btn-show.component.html',
  styleUrls: ['./q-radio-btn-show.component.scss']
})
export class QRadioBtnShowComponent implements OnInit {
  chosenResponse: string;
  @Output() output = new EventEmitter();
  @Input() question ;
  constructor(
      public dialogRef: MatDialogRef<QRadioBtnShowComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }

}
