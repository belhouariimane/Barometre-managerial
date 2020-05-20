import {Component, OnInit} from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-questionnaire-show',
  templateUrl: './questionnaire-show.component.html',
  styleUrls: ['./questionnaire-show.component.scss']
})
export class QuestionnaireShowComponent implements OnInit {
  public questionnaire: Questionnaire;
  questions = [];
  private titre: string;

  constructor(private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
        .subscribe(questions => {
          this.questions = questions;
        });
    this.questionnaireService.getById(this.route.snapshot.params.id)
        .subscribe(questionnaire => this.questionnaire = questionnaire);
  }
}
