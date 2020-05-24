import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../services/question.service';
import {AlertService} from '../../services/alert.service';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../models/question';
import {Proposition} from '../../models/proposition';
import {PropositionService} from '../../services/proposition.service';
import {first} from 'rxjs/operators';
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
  themes = [];
  loading = false;
  type: string;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private questionnaireService: QuestionnaireService,
              private propositionService: PropositionService,
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
        titre: ['', Validators.required],
        type: [''],
        idTheme: [null, Validators.required],
        isRequired: [false],
        isFilter: [false],
        hasGraph: [false],
        propositions: this.formBuilder.array([])
    });

    this.loadAllThemes(this.idQuestionnaire);
    this.loadAllPropositions(this.idQuestion);
    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestion !== undefined) {
      this.modification = true;
      this.questionService.read(this.idQuestion)
          .subscribe(question => {
            if (question !== null) {
                this.question = question;
                this.type = question.type;
                this.questionForm = this.formBuilder.group({
                  idQuestionnaire: [this.idQuestionnaire],
                  titre: [question.titre, Validators.required],
                  type: [question.type, Validators.required],
                  idTheme: [question.idTheme, Validators.required],
                  isRequired: [question.isRequired, Validators.required],
                  isFilter: [question.isFilter, Validators.required],
                  hasGraph: [question.hasGraph, Validators.required],
                  propositions: this.formBuilder.array([])
                });
                this.loadAllPropositions(question.id);
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
      this.propositions.push(this.formBuilder.group({libelle: value === null ? '' : value}));
  }

  removeProposition(i: number) {
      this.propositions.removeAt(i);
  }

  loadAllPropositions(idQuestion: number) {
    // const p1 = new Proposition();
    // p1.id = 1;
    // p1.idQuestion = this.idQuestion;
    // p1.libelle = 'Première proposition';
    // const p2 = new Proposition();
    // p2.id = 2;
    // p2.idQuestion = this.idQuestion;
    // p2.libelle = 'Deuxième proposition';
    // this.addPropositions(p1.libelle);
    // this.addPropositions(p2.libelle);
    this.propositionService.readAllByIdQuestion(this.idQuestion)
        .pipe(first())
        .subscribe(propositions => {
            for (const proposition of propositions) {
                this.addPropositions(proposition.libelle);
            }
        });
  }

  loadAllThemes(idQuestionnaire: number) {
      this.themes.push('Thème A');
      this.themes.push('Thème B');
      this.themes.push('Thème C');
  }

  onNewQuestion() {
    this.questionForm.value.type = this.type;
    console.log(this.questionForm.value);

    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide ; cas particulier pour le type...
    if (this.questionForm.invalid || this.type === undefined) {
      return;
    }

    this.loading = true;
    // enregistre le nouveau questionnaire
    if (this.modification) {
      this.questionService.update(this.idQuestion, this.questionForm.value)
          .subscribe(data => {
                this.alertService.success('Question enregistrée', true);
              }, error => {
                  this.alertService.error(error);
              }
          );
    } else {
      this.questionService.create(this.questionForm.value)
          .subscribe(data => {
                  this.alertService.success('Question enregistrée', true);
              }, error => {
                this.alertService.error(error);
              }
          );
    }
    this.propositionService.deleteAll(this.idQuestion).subscribe();
    for (let i = 0; i < this.propositions.length; i++) {
      const p = new Proposition();
      p.idQuestion = this.idQuestion;
      p.libelle = this.propositions.value[i].libelle;
      p.order = i + 1;
      this.propositionService.create(p).subscribe();
    }
    this.router.navigate(['/edit-questionnaire', this.idQuestionnaire]);
    this.loading = false;
  }

  addCheckBox() {
      this.type = 'check';
  }

  addDatePicker() {
      this.type = 'date';
  }

  addInput() {
      this.type = 'input';
  }

  addRadioBtn() {
      this.type = 'radio';
  }

  addSelect() {
      this.type = 'select';
  }

  backClicked() {
    this.location.back();
  }

}
