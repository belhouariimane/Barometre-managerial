import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../model/question';

@Component({
  selector: 'app-q-check-box-show',
  templateUrl: './q-check-box-show.component.html',
  styleUrls: ['./q-check-box-show.component.scss']
})
export class QCheckBoxShowComponent implements OnInit {
  @Input() type = 'show';
  @Output() output = new EventEmitter();
  @Input() question ;
  constructor() { }

  ngOnInit() {
    console.log(this.type);
    console.log(this.question);
  }

}
