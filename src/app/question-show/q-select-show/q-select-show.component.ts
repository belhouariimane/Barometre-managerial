import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';

@Component({
  selector: 'app-q-select-show',
  templateUrl: './q-select-show.component.html',
  styleUrls: ['./q-select-show.component.scss']
})
export class QSelectShowComponent implements OnInit {
  public question;

  constructor() { }

  ngOnInit() {
    this.question = new Question(1, 'libelleQuestion', 'select', true, null, 1);
  }

}
