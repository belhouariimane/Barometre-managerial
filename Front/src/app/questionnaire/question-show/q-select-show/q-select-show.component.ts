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
  constructor(
      public dialogRef: MatDialogRef<QSelectShowComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }
}
