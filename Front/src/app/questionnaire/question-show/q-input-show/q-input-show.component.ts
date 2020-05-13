import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QCheckBoxEditComponent} from '../../question-edit/q-check-box-edit/q-check-box-edit.component';
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
  constructor(
      public dialogRef: MatDialogRef<QInputEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }

}
