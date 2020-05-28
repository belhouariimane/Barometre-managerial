import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {Question} from '../../models/question';
import {Questionnaire} from '../../models/questionnaire';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      anonymous: [false],
      idUser: [this.authService.currentUserValue.id]
    });

    this.idQuestionnaire = this.route.snapshot.params.id;
    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestionnaire !== undefined) {
      this.modification = true;
      this.questionnaireService.getById(this.idQuestionnaire)
          .subscribe(questionnaire => {
            if (questionnaire !== null) {
              this.loadAllQuestions(this.idQuestionnaire);
              this.loadNbParticipations(this.idQuestionnaire);
              this.questionnaireForm = this.fb.group({
                titre: [questionnaire.titre, Validators.required],
                description: [questionnaire.description, Validators.required],
                remerciement: [questionnaire.remerciement, Validators.required],
                anonymous: [questionnaire.anonymous],
                idUser: [this.authService.currentUserValue.id]
              });
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
              questionnaire => {
                this.router.navigate(['/edit-questionnaire', questionnaire.id]);
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
          );
    }
    this.loading = false;
  }

  loadAllQuestions(idQuestionnaire: number) {
    this.questionService.readAllByIdQuestionnaire(idQuestionnaire)
        .subscribe(questions => {
          this.questions = questions;
          questions.forEach((item) => {
            console.log(item.valeur + ' : ordre ' + item.ordre);
          });
        });
  }


  loadNbParticipations(idQuestionnaire: number) {
    this.participantService.readAllByIdQuestionnaire(idQuestionnaire)
        .subscribe(participants => {
          this.nbParticipants = participants.length;
        });
    this.nbParticipants = 1;
  }

  deleteQuestion(idQuestion: number) {
    this.questionService.delete(idQuestion).subscribe();
    this.questionService.readAllByIdQuestionnaire(this.idQuestionnaire)
        .subscribe(questions => {
          questions.forEach((item, index) => {
            if (index > idQuestion) {
              item.ordre--;
              this.questionService.update(item.id, item, item.propositions).subscribe();
            }
          });
          this.loadAllQuestions(this.idQuestionnaire);
        });
  }

  // monte l'emplacement d'une question (décrémente l'ordre de 1)
  up(index: number) {
    const questionUp: Question = this.questions[index];
    const questionDown: Question = this.questions[index - 1];
    questionUp.ordre--;
    questionDown.ordre++;
    this.questionService.update(questionUp.id, questionUp, questionUp.propositions).subscribe();
    this.questionService.update(questionDown.id, questionDown, questionDown.propositions).subscribe();
    this.loadAllQuestions(this.idQuestionnaire);
  }

  // descend l'emplacement d'une question (donc l'augmente de 1)
  down(index: number) {
    const questionDown: Question = this.questions[index];
    const questionUp: Question = this.questions[index + 1];
    questionDown.ordre++;
    questionUp.ordre--;
    this.questionService.update(questionUp.id, questionUp, questionUp.propositions).subscribe();
    this.questionService.update(questionDown.id, questionDown, questionDown.propositions).subscribe();
    this.loadAllQuestions(this.idQuestionnaire);
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

}
