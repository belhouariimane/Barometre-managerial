import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {Question} from '../../models/question';
import {Proposition} from '../../models/proposition';
import {Participant} from '../../models/participant';
import {MatCheckboxChange, MatDatepickerInputEvent, MatRadioChange, MatSelectChange, MatSliderChange} from '@angular/material';
import {Reponse} from '../../models/reponse';
import {ParticipantService} from '../../services/participant.service';

@Component({
  selector: 'app-questionnaire-answer',
  templateUrl: './questionnaire-answer.component.html',
  styleUrls: ['./questionnaire-answer.component.scss']
})
export class QuestionnaireAnswerComponent implements OnInit {
  answerForm: FormGroup;
  public questionnaire: Questionnaire;
  participant: Participant;
  submitted = false;
  loading = false;
  done = false;
  anonymous: boolean;
  perime = false;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private participantService: ParticipantService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    // permet la redirection en cas d'identifiant inexistant
    this.questionnaireService.getById(this.route.snapshot.params.id)
        .subscribe(questionnaire => {
          if (questionnaire !== null) {
            this.questionnaire = questionnaire;
            this.participant = new Participant();
            this.participant.idQuestionnaire = questionnaire.id;
            this.anonymous = questionnaire.anonymous;
            if (this.anonymous) {
              this.answerForm = this.formBuilder.group({
                firstName: [''],
                lastName: [''],
                questions: this.formBuilder.array([])
              });
            } else {
              this.answerForm = this.formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                questions: this.formBuilder.array([])
              });
            }
          } else {
            this.alertService.clear();
            this.alertService.error('Le questionnaire demandé n\'existe pas.', true);
            this.router.navigate(['/login']);
          }

          // permet de récupérer l'ensemble des questions et des propositions liées à ce questionnaire
          this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
              .subscribe(questions => {
                questions.forEach( (item, index) => {
                  this.addQuestion(item);
                  item.propositions.forEach((item2) => {
                    this.addProposition(index, item2);
                  });
                });
              });
        });
  }

  // Permet de vérifier si l'utilisateur a bien répondu à toutes les questions obligatoires
  checkAnswers(): boolean {
    let invalid = true;
    this.getQuestions(this.answerForm).forEach((item) => {
      if (item.value.isRequired) {
        // dans le cas des questions ouvertes, si la réponse est vide et que la question est obligatoire,
        // on génère une erreur
        if (item.value.typeQuestion === 'OUVERT' || item.value.typeQuestion === 'DATE' || item.value.typeQuestion === 'EVALUATION') {
          if (item.value.valeurReponse === '') {
            invalid = false;
          }
        } else {
          let isRequiredOK = false;
          this.getPropositions(item).forEach((prop) => {
            // si on trouve au moins une valeur sélectionnée par le participant,
            // on considère qu'il a répondu à la question obligatoire
            if (prop.value.chosen && !isRequiredOK) {
              isRequiredOK = true;
            }
          });
          // sinon, on signale qu'aucune réponse n'a été détectée
          if (!isRequiredOK) {
            invalid = false;
          }
        }
      }
    });
    return invalid;
  }

  initQuestion(question: Question) {
    return this.formBuilder.group({
      idQuestion: [question.id],
      valeurQuestion: [question.valeur],
      typeQuestion: [question.typeQuestion],
      isRequired: [question.isRequired],
      valeurReponse: [''],
      propositions: this.formBuilder.array([])
    });
  }

  initProposition(proposition: Proposition) {
    return this.formBuilder.group({
      idProp: [proposition.id],
      valeurProp: [proposition.valeur],
      chosen: false,
    });
  }

  get questions(): FormArray {
    return this.answerForm.get('questions') as FormArray;
  }

  addQuestion(question: Question) {
    this.questions.push(this.initQuestion(question));
  }

  addProposition(j, proposition: Proposition) {
    const control = this.questions.controls[j].get('propositions') as FormArray;
    control.push(this.initProposition(proposition));
  }

  getQuestions(form) {
    return form.controls.questions.controls;
  }

  getPropositions(question) {
    return question.get('propositions').controls;
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.answerForm.controls;
  }

  onSubmit(formGroup: FormGroup) {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.answerForm.invalid || !this.checkAnswers()) {
      if (!this.checkAnswers()) {
        this.alertService.clear();
        this.alertService.error('Merci de répondre aux questions obligatoires');
      }
      return;
    }

    // récupère dans un premier temps le nom et prénom du participant si non anonyme
    if (!this.anonymous) {
      this.participant.prenom = this.answerForm.value.firstName;
      this.participant.nom = this.answerForm.value.lastName;
    }

    // puis, pour chaque question (même facultative et sans réponse)
    // on insère dans le tableau de reponses la réponse du participant à la question
    // cette réponse sera stockée soit comme chaine de caractères pour les questions ouvertes et de type date
    // soit sous forme de tableau d'identifiant de propositions (préalablement enregistrées en base lors de la création du questionnaire)
    this.participant.reponses = [];
    this.getQuestions(this.answerForm).forEach((question) => {
      const reponse = new Reponse();
      reponse.idQuestion = question.value.idQuestion;
      if (question.value.typeQuestion === 'OUVERT'
          || question.value.typeQuestion === 'DATE'
          || question.value.typeQuestion === 'EVALUATION') {
        reponse.valeur = question.value.valeurReponse;
        // on envoie la réponse seulement si celle-ci a une valeur
        if (reponse.valeur !== '') {
          this.participant.reponses.push(reponse);
        }
      } else {
        reponse.idsProposition = [];
        this.getPropositions(question).forEach((proposition) => {
          if (proposition.value.chosen) {
            reponse.idsProposition.push(proposition.value.idProp);
          }
        });
        if (reponse.idsProposition.length > 0) {
          this.participant.reponses.push(reponse);
        }
      }
    });

    // lorsque l'objet participant est complet, on l'envoie vers l'API
    this.participantService.create(this.participant).subscribe(next => {
      this.alertService.success('Participation enregistrée');
    }, error => {
      this.alertService.error('Ce questionnaire n\'est plus disponible.');
      this.perime = true;
    });
    this.done = true;
  }

  onChangeSelect(event: any, question: Question) {
    this.getPropositions(question).forEach((item) => {
      if (item.value.valeurProp === this.getPropositions(question)[event.value].value.valeurProp) {
        item.value.chosen = true;
      } else {
        item.value.chosen = false;
      }
    });
  }

  onChangeCheckbox(event: MatCheckboxChange, question: Question) {
    this.getPropositions(question).forEach((item) => {
      if (item.value.valeurProp === this.getPropositions(question)[event.source.id].value.valeurProp) {
        item.value.chosen = event.checked;
      }
    });
  }

  onChangeDate(event: MatDatepickerInputEvent<any>, question: AbstractControl) {
    question.value.valeurReponse = new Date((event.value).setHours(event.value.getHours() + 2)).toLocaleDateString();
  }

  onChangeEvaluation(event: number, question: AbstractControl) {
    question.value.valeurReponse = event;
  }
}
