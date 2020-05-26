import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {Question} from '../../models/question';
import {Proposition} from '../../models/proposition';
import {Participant} from '../../models/participant';
import {MatCheckboxChange, MatRadioChange, MatSelectChange} from '@angular/material';
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
  prenom: string;
  anonymous: boolean;

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
              // }, { validators: this.checkAnswersValidator});
            } else {
              this.answerForm = this.formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                questions: this.formBuilder.array([])
              });
              // }, { validators: this.checkAnswers});
            }
          } else {
            this.alertService.clear();
            this.alertService.error('Le questionnaire demandé n\'existe pas.', true);
            this.router.navigate(['/login']);
          }
        });
    // permet de récupérer l'ensemble des questions et des propositions liées à ce questionnaire
    this.questionService.readAllByIdQuestionnaire(this.route.snapshot.params.id)
        .subscribe(questions => {
          questions.forEach( (item, index) => {
            console.log(item.valeur);
            this.addQuestion(item);
            item.propositions.forEach((item2) => {
              this.addProposition(index, item2);
            });
          });
        });
  }

  checkAnswersValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    return this.checkAnswers(group) === true ? null : { 'requiredAnswers': true };
  }

  checkAnswers(group: FormGroup): boolean {
    this.getQuestions(group).forEach((item) => {
      if (item.value.isRequired) {
        console.log('required : ' + item.value.valeurQuestion);
        if (item.value.typeQuestion === 'OUVERT' || item.value.typeQuestion === 'DATE') {
          if (item.value.valeurReponse === '') {
            console.log('Erreur : ' + item.value.valeurQuestion);
            return false;
          }
        } else {
          let isRequiredOK = false;
          this.getPropositions(item.value).forEach((prop) => {
            // si on trouve au moins une valeur sélectionnée par le participant,
            // on considère qu'il a répondu à la question obligatoire
            if (prop.value.chosen && !isRequiredOK) {
              isRequiredOK = true;
            }
          });
          // sinon, on signale qu'aucune réponse n'a été détectée
          if (!isRequiredOK) {
            console.log('Erreur : ' + item.value.valeurQuestion);
            return false;
          }
        }
      }
    });
    return true;
  }

  initQuestion(question: Question) {
    const prop = new Proposition();
    prop.valeur = 'OUIII';
    prop.id = 54;
    return this.formBuilder.group({
      idQuestion: [question.id],
      valeurQuestion: [question.valeur],
      typeQuestion: [question.typeQuestion],
      isRequired: [question.isRequired],
      order: [''],
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
    if (this.answerForm.invalid) {
      return;
    }

    console.log(this.questions.controls[0].value.valeurReponse);

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
      if (question.value.typeQuestion === 'OUVERT' || question.value.typeQuestion === 'DATE') {
        reponse.valeur = question.value.valeurReponse;
      } else {
        reponse.idsProposition = [];
        console.log('Question : ' + question.value.valeurQuestion);
        console.log('Propositions : ');
        this.getPropositions(question).forEach((proposition) => {
          console.log(proposition.value.valeurProp + ' : ' + proposition.value.chosen);
          if (proposition.value.chosen) {
            reponse.idsProposition.push(proposition.value.idProp);
          }
        });
      }
      this.participant.reponses.push(reponse);
    });

    // lorsque l'objet participant est complet, on l'envoie vers l'API
    this.participantService.create(this.participant).subscribe();
    this.done = true;
  }

  onChangeSelect(event: any, question: Question) {
    this.getPropositions(question).forEach((item, index) => {
      if (item.value.valeurProp === this.getPropositions(question)[event.value].value.valeurProp) {
        item.value.chosen = true;
      } else {
        item.value.chosen = false;
      }
      console.log(item.value.valeurProp + ' : ' + item.value.chosen);
    });
  }

  onChangeCheckbox(event: MatCheckboxChange, question: Question) {
    this.getPropositions(question).forEach((item) => {
      if (item.value.valeurProp === this.getPropositions(question)[event.source.id].value.valeurProp) {
        item.value.chosen = event.checked;
        console.log(item.value.valeurProp + ' : ' + item.value.chosen);
      }
    });
  }
}
