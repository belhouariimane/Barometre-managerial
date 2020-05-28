import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {Question} from '../../models/question';
import {Questionnaire} from '../../models/questionnaire';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {AlertService} from '../../services/alert.service';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';
import {Location} from '@angular/common';
import {ThemeService} from '../../services/theme.service';
import {QuestionService} from '../../services/question.service';
import {Theme} from '../../models/theme';
import {ParticipantService} from '../../services/participant.service';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss']

})
export class QuestionnaireEditComponent implements OnInit {
  question: Question;
  questionnaire: Questionnaire;
  questionnaireForm: FormGroup;
  questions = [];
  questionnaires = [];
  idQuestionnaire: number;
  loading = false;
  submitted = false;
  modification = false;
  nbParticipants = 0;
  dateLimite: string;

  constructor(private fb: FormBuilder,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private authService: AuthService,
              private themeService: ThemeService,
              private questionService: QuestionService,
              private participantService: ParticipantService,
              private location: Location,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      remerciement: ['', Validators.required],
      datePeremption: [''],
      anonymous: [false],
      idUser: [this.authService.currentUserValue.id]
    }, { validators: this.checkDate});

    this.idQuestionnaire = this.route.snapshot.params.id;
    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestionnaire !== undefined) {
      this.modification = true;
      this.questionnaireService.getById(this.idQuestionnaire)
          .subscribe(questionnaire => {
            if (questionnaire !== null) {
              this.loadAllQuestions();
              this.loadNbParticipations(questionnaire.id);
              this.questionnaireForm = this.fb.group({
                titre: [questionnaire.titre, Validators.required],
                description: [questionnaire.description, Validators.required],
                remerciement: [questionnaire.remerciement, Validators.required],
                datePeremption: [questionnaire.datePeremption],
                anonymous: [questionnaire.anonymous],
                idUser: [this.authService.currentUserValue.id]
              }, { validators: this.checkDate});
              this.dateLimite = new Date(questionnaire.datePeremption).toLocaleDateString();
            } else {
              this.alertService.clear();
              this.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);
              this.router.navigate(['/']);
            }
          });
    }
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.questionnaireForm.controls;
  }

  onNewQuestionnaire() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.questionnaireForm.invalid) {
      if (this.questionnaireForm.errors.before) {
        console.log('erreur date');
      }
      return;
    }

    this.loading = true;
    // enregistre le nouveau questionnaire
    if (this.modification) {
      this.questionnaireService.update(this.idQuestionnaire, this.questionnaireForm.value)
          .pipe(first())
          .subscribe(
              data => {
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
      );
    } else {
      this.questionnaireService.register(this.questionnaireForm.value)
          .pipe(first())
          .subscribe(
              retour => {
                this.router.navigate(['/edit-questionnaire', retour.questionnaire.id]);
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
          );
    }
    this.loading = false;
  }

  loadAllQuestions() {
    this.questionService.readAllByIdQuestionnaire(this.idQuestionnaire)
        .subscribe(questions => {
          this.questions = questions;
        });
  }


  loadNbParticipations(idQuestionnaire: number) {
    this.participantService.readAllByIdQuestionnaire(idQuestionnaire)
        .subscribe(participants => {
          this.nbParticipants = participants.length;
        });
  }

  deleteQuestion(idQuestion: number) {
    const indexQuestion = this.questions.findIndex(x => x.id === idQuestion);
    this.questionService.delete(idQuestion).subscribe(() => {
      this.questionService.readAllByIdQuestionnaire(this.idQuestionnaire)
          .subscribe(questions => {
            questions.forEach((item, index) => {
              if (index >= indexQuestion) {
                item.ordre--;
                this.questionService.updateOrder(item).subscribe(() => {}, () => {}, () => {
                  // Après avoir mis à jour le dernier ordre, on met à jour la liste de questions
                  if (index === questions.length - 1) {
                    this.loadAllQuestions();
                  }
                });
              }
            });
          });
    });
  }

  // monte l'emplacement d'une question (décrémente l'ordre de 1)
  up(index: number) {
    const questionUp: Question = this.questions[index];
    const questionDown: Question = this.questions[index - 1];
    questionUp.ordre--;
    questionDown.ordre++;
    // ici, on veut simplement mettre à jour l'ordre donc on ne passe pas les propositions de la question en paramètre
    this.questionService.updateOrder(questionUp).subscribe(() => {
      this.questionService.updateOrder(questionDown).subscribe(() => {
        this.loadAllQuestions();
      });
    });
  }

  // descend l'emplacement d'une question (donc l'augmente de 1)
  down(index: number) {
    const questionDown: Question = this.questions[index];
    const questionUp: Question = this.questions[index + 1];
    questionDown.ordre++;
    questionUp.ordre--;
    this.questionService.updateOrder(questionUp).subscribe(() => {
      this.questionService.updateOrder(questionDown).subscribe(() => {
        this.loadAllQuestions();
      });
    });
  }

  // permet d'afficher à l'utilisateur des types de questions plus compréhensibles
  getRealType(typeQuestion: string): string {
    let returnStr = '';
    switch (typeQuestion) {
      case 'OUVERT':
        returnStr = 'question ouverte';
        break;
      case 'DATE':
        returnStr = 'date';
        break;
      case 'EVALUATION':
        returnStr = 'question d\'évaluation';
        break;
      case 'RADIO':
        returnStr = 'question à choix unique (boutons)';
        break;
      case 'CHECKBOX':
        returnStr = 'question à choix multiples';
        break;
      case 'COMBOBOX':
        returnStr = 'question à choix unique (sélection)';
        break;
    }
    return returnStr;
  }

  checkDate: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const dateP = new Date(group.get('datePeremption').value).getTime();
    const dateN = new Date(Date.now()).getTime();
    console.log(dateP + ' > ' + dateN + ' = ' + (dateP > dateN));
    return dateP > dateN ? null : { 'before': true };
  }
}
