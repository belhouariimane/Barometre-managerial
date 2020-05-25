import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../../models/questionnaire';
import {QuestionService} from '../../services/question.service';
import {QuestionnaireService} from '../../services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {ReponseService} from '../../services/reponse.service';
import {Question} from '../../models/question';
import {Proposition} from '../../models/proposition';

@Component({
  selector: 'app-questionnaire-answer',
  templateUrl: './questionnaire-answer.component.html',
  styleUrls: ['./questionnaire-answer.component.scss']
})
export class QuestionnaireAnswerComponent implements OnInit {
  answerForm: FormGroup;
  public questionnaire: Questionnaire;
  submitted = false;
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
    this.answerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      questions: this.formBuilder.array([])
    });

    // permet la redirection en cas d'identifiant inexistant
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

    this.prenom = this.answerForm.value.firstName;


    this.answerForm.value.questions.forEach((item, index) => {
      switch (item.typeQuestion) {
        case 'OUVERT':
        case 'DATE':
          console.log('La réponse à la question : ' + item.valeurQuestion + ' est : ' + item.valeurReponse);
          break;
        case 'RADIO':
        case 'COMBOBOX':
        case 'CHECKBOX':
          console.log(this.questions.get('0'));
          console.log(this.questions.get('1'));
          console.log(this.questions.get('2'));
          console.log(this.questions.get('3'));
          console.log(this.questions.get('propositions'));
          console.log('La réponse à la question : ' + item.valeurQuestion + ' est : ' + item.id);
          break;
      }
      console.log('index : ' + index);
      console.log('reponse : ' + item.valeurReponse);
      console.log('type : ' + item.typeQuestion);
      console.log(this.questions.controls[index].value.valeurReponse);
    });

    console.log(this.questions.controls[0].value.valeurReponse);

    console.log(this.answerForm.value.textfin);

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

  onChangeSelect(event: any, index: number) {
    console.log(event.value);
    this.questions.controls[index].value.valeurReponse = event.value;
    console.log(this.questions.controls[index]);
    console.log('SELECT');
  }

  onChangeCheckbox(values: any, question: Question,  proposition: Proposition) {
    console.log('values: ' + values.currentTarget.id);
    console.log('valuesIndex: ' + values.currentIndex);
    console.log('à changer : ' + this.getPropositions(question)[values.currentTarget.id].controls.chosen);
    console.log('à changer : ' + this.getPropositions(question)[values.currentTarget.id].value.chosen);
    console.log('à changer : ' + this.getPropositions(question)[values.currentTarget.id].chosen);
    console.log('Nouvelle valeur : ' + values.currentTarget.checked);
    console.log(this.getPropositions(question).forEach((item) => {
      console.log(item.value.valeurProp + ' = ? ' + proposition.valeur);
      if (item.value.valeurProp === proposition.valeur) {
        console.log('checked or not? : ' + values.currentTarget.checked);
        item.chosen = values.currentTarget.checked;
        console.log(item.chosen);
      }
    }));
  }
}
