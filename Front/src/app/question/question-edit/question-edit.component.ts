import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../services/question.service';
import {AlertService} from '../../services/alert.service';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../models/question';
import {Location} from '@angular/common';
import {QuestionnaireService} from '../../services/questionnaire.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  questionForm: FormGroup;
  question: Question;
  idQuestion: number;
  idQuestionnaire: number;
  modification: boolean;
  submitted = false;
  loading = false;
  typeQuestion: string;
  isOpenQuestion = false;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {

    // Récupère les identifiants du questionnaire et de la question via l'url
    this.idQuestionnaire = this.route.snapshot.params.idQuestionnaire;
    this.idQuestion = this.route.snapshot.params.idQuestion;

    this.questionnaireService.getById(this.idQuestionnaire)
        .subscribe( questionnaire => {
            if (questionnaire === null) {
                this.alertService.clear();
                this.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);
                this.router.navigate(['/']);
            }
        });

    this.questionForm = this.formBuilder.group({
        idQuestionnaire: [this.idQuestionnaire],
        valeur: ['', Validators.required],
        typeQuestion: [''],
        isRequired: [false],
        isFilter: [false],
        hasGraph: [false],
        ordre: [],
        propositions: this.formBuilder.array([])
    });

    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestion !== undefined) {
        this.modification = true;
        this.questionService.read(this.idQuestion)
            .subscribe(question => {
                if (question !== null) {
                    this.question = question;
                    this.typeQuestion = question.typeQuestion;
                    this.questionForm = this.formBuilder.group({
                        idQuestionnaire: [this.idQuestionnaire],
                        valeur: [question.valeur, Validators.required],
                        typeQuestion: [question.typeQuestion, Validators.required],
                        isRequired: [question.isRequired, Validators.required],
                        isFilter: [question.isFilter, Validators.required],
                        hasGraph: [question.hasGraph, Validators.required],
                        ordre: [question.ordre],
                        propositions: this.formBuilder.array([])
                    });
                    this.question.propositions.forEach((item) => {
                        this.addPropositions(item.valeur);
                    });
                } else {
                    this.alertService.clear();
                    this.alertService.error('La question demandée n\'existe pas. Retour au questionnaire.', true);
                    this.router.navigate(['/edit-questionnaire', this.idQuestionnaire]);
                }
            });
    }
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.questionForm.controls;
  }

  get propositions(): FormArray {
      return this.questionForm.get('propositions') as FormArray;
  }

  addPropositions(value: string) {
      this.submitted = false;
      this.propositions.push(this.formBuilder.group({valeur: [value, [Validators.required]]}));
  }

  removeProposition(i: number) {
      if (this.propositions.length > 2) {
          this.propositions.removeAt(i);
      }
  }

  onNewQuestion() {
    this.questionForm.value.typeQuestion = this.typeQuestion;

    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide ; cas particulier pour le typeQuestion...
    if (this.questionForm.invalid || this.typeQuestion === undefined) {
      return;
    }

      if (this.isOpenQuestion) {
          this.questionForm.value.hasGraph = false;
          this.questionForm.value.isFilter = false;
      }


      this.loading = true;
    // enregistre le nouveau questionnaire
    if (this.modification) {
      this.questionService.update(this.idQuestion, this.questionForm.value, this.propositions.value)
          .subscribe(data => {
                this.alertService.success('Question enregistrée', true);
              }, error => {
                  this.alertService.error(error);
              }, () => {
                  this.router.navigate(['/edit-questionnaire', this.idQuestionnaire]);
                  this.loading = false;
              }
          );
    } else {
        this.questionService.readAllByIdQuestionnaire(this.idQuestionnaire)
            .subscribe(questions => {
                this.questionForm.value.ordre = questions.length;
                this.questionForm.value.ordre++;
            }, () => {}, () => {
                this.questionService.create(this.questionForm.value, this.propositions.value)
                  .subscribe(data => {
                        this.alertService.success('Question enregistrée', true);
                      }, error => {
                        this.alertService.error(error);
                      }, () => {
                          this.router.navigate(['/edit-questionnaire', this.idQuestionnaire]);
                          this.loading = false;
                      }
                  );
            });
    }
  }


  addCheckBox() {
      this.typeQuestion = 'CHECKBOX';
      if (this.propositions.length === 0) {
          this.addPropositions('');
          this.addPropositions('');
      }
      this.isOpenQuestion = false;
  }

  addRadioBtn() {
      this.typeQuestion = 'RADIO';
      if (this.propositions.length === 0) {
          this.addPropositions('');
          this.addPropositions('');
      }
      this.isOpenQuestion = false;
  }

  addSelect() {
      this.typeQuestion = 'COMBOBOX';
      if (this.propositions.length === 0) {
          this.addPropositions('');
          this.addPropositions('');
      }
      this.isOpenQuestion = false;
  }

  addDatePicker() {
      this.typeQuestion = 'DATE';
      this.isOpenQuestion = true;
  }

  addInput() {
      this.typeQuestion = 'OUVERT';
      this.isOpenQuestion = true;
  }

  addEvaluation() {
      this.typeQuestion = 'EVALUATION';
      this.isOpenQuestion = true;
  }

  backClicked() {
    this.location.back();
  }
}
