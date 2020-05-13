import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../model/question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QCheckBoxEditComponent} from '../../question-edit/q-check-box-edit/q-check-box-edit.component';

@Component({
  selector: 'app-q-check-box-show',
  templateUrl: './q-check-box-show.component.html',
  styleUrls: ['./q-check-box-show.component.scss']
})
export class QCheckBoxShowComponent implements OnInit {
  @Input() type = 'show';
  @Output() output = new EventEmitter();
  @Input() question ;
  constructor(
      public dialogRef: MatDialogRef<QCheckBoxEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Question) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.type);
    console.log(this.data);
  }

}
