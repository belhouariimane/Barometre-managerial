import {Component, OnInit} from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-questionnaire-show',
  templateUrl: './questionnaire-show.component.html',
  styleUrls: ['./questionnaire-show.component.scss']
})
export class QuestionnaireShowComponent implements OnInit {
  public questionnaire: Questionnaire;
  questions = [];

  constructor(private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.questionnaireService.getById(this.route.snapshot.params.id)
        .subscribe(questionnaire => {
          if (questionnaire !== null) {
            this.questionnaire = questionnaire;
          } else {
            this.alertService.clear();
            this.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);
            this.router.navigate(['/']);
          }
        });
    this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
        .subscribe(questions => {
          this.questions = questions;
        });
  }
}
