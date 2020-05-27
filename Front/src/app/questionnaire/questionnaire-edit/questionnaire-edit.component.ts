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

  constructor(private fb: FormBuilder,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private authService: AuthService,
              private themeService: ThemeService,
              private questionService: QuestionService,
              private location: Location,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      merci: ['', Validators.required],
      anonymous: [false],
      idUser: [this.authService.currentUserValue.id]
      // themes: this.fb.array([])
    });

    this.idQuestionnaire = this.route.snapshot.params.id;
    // en cas de modification, on renseigne dans le formulaire les informations déjà présentes
    if (this.idQuestionnaire !== undefined) {
      this.modification = true;
      this.questionnaireService.getById(this.idQuestionnaire)
          .subscribe(questionnaire => {
            if (questionnaire !== null) {
              this.loadAllQuestions(this.idQuestionnaire);
              this.loadAllThemes(this.idQuestionnaire);
              this.questionnaireForm = this.fb.group({
                titre: [questionnaire.titre, Validators.required],
                description: [questionnaire.description, Validators.required],
                merci: [questionnaire.merci, Validators.required],
                anonymous: [questionnaire.anonymous],
                idUser: [this.authService.currentUserValue.id],
                // themes: this.fb.array([])
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

  get themes(): FormArray {
    return this.questionnaireForm.get('themes') as FormArray;
  }

  addTheme(value: string) {
    this.themes.push(this.fb.group({theme: value === null ? '' : value}));
  }

  removeTheme(i: number) {
    this.themes.removeAt(i);
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
                // this.themeService.deleteAll(this.idQuestionnaire).subscribe();
                // for (let i = 1; i <= this.themes.length; i++) {
                //   const t = new Theme();
                //   t.idQuestionnaire = this.idQuestionnaire;
                //   t.theme = this.themes.at(i).value;
                //   t.order = i;
                //   this.themeService.create(t);
                // }
                this.alertService.success('Questionnaire enregistré', true);
              }, error => {
                this.alertService.error(error);
              }
      );
    } else {
      this.questionnaireService.register(this.questionnaireForm.value)
          .pipe(first())
          .subscribe(
              data => {
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
        });
  }


  loadAllThemes(idQuestion: number) {
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
    // this.themeService.readAllByIdQuestionnaire(this.idQuestionnaire)
    //     .subscribe(themes => {
    //       themes.forEach(function(item) {
    //         console.log('Thème : ' + item.id + ', ' + item.idQuestionnaire + ', ' + item.theme);
    //         this.addTheme(item.theme);
    //       });
    //     });
  }

  deleteQuestion(idQuestion: number) {
    this.questionService.delete(idQuestion).subscribe(() => {
      this.loadAllQuestions(this.idQuestionnaire);
    });
  }


  getRealType(typeQuestion: string): string {
    let returnStr = '';
    switch (typeQuestion) {
      case 'OUVERT':
        returnStr = 'question ouverte';
        break;
      case 'DATE':
        returnStr = 'date';
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