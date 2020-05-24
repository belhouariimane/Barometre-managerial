import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {ReponseService} from '../../services/reponse.service';

@Component({
  selector: 'app-questionnaire-answer',
  templateUrl: './questionnaire-answer.component.html',
  styleUrls: ['./questionnaire-answer.component.scss']
})
export class QuestionnaireAnswerComponent implements OnInit {
  public questionnaire: Questionnaire;
  questions = [];
  submitted = false;
  answerForm: FormGroup;
  loading = false;
  done = false;
  prenom: string;


  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private reponseService: ReponseService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.questionnaireService.getById(this.route.snapshot.params.id)
        .subscribe(questionnaire => {
          if (questionnaire !== null) {
            this.questionnaire = questionnaire;
          } else {
            this.alertService.clear();
            this.alertService.error('Le questionnaire demandé n\'existe pas.', true);
            this.router.navigate(['/login']);
          }
        });
    this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
        .subscribe(questions => {
          this.questions = questions;
        });
    this.answerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

    });
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.answerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.answerForm.invalid) {
      return;
    }

    this.prenom = this.answerForm.value.firstName;

    // enregistre le nouvel utilisateur puis le connecte immédiatement
    // this.loading = true;
    // this.reponseService.create(this.answerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //           this.alertService.success('Participation enregistrée', true);
    //           this.done = true;
    //         }, error => {
    //           this.alertService.error(error);
    //           this.loading = false;
    //         }
    //     );
    this.done = true;
  }
}
