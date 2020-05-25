import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {AlertService} from '../services/alert.service';
import {first} from 'rxjs/operators';
import {QuestionnaireService} from '../services/questionnaire.service';
import {QuestionService} from '../services/question.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  updateUserForm: FormGroup;
  loading = false;
  submitted = false;
  currentUser: User;
  message: string;
  nbQuestionnairesCrees: number;
  nbQuestionsCreees: number;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private alertService: AlertService,
              private questionnaireService: QuestionnaireService,
              private questionService: QuestionService,
              private router: Router) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      prenom: [this.currentUser.prenom],
      nom: [this.currentUser.nom],
      email: [this.currentUser.email],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.minLength(6)]
    }, { validators: this.checkPasswords});
    this.nbQuestionsCreees = 0;
    this.questionnaireService.getAllByIdUser(this.currentUser.id)
        .subscribe(questionnaires => {
          this.nbQuestionnairesCrees = questionnaires.length;
          for (const questionnaire of questionnaires) {
            this.questionService.readAllByIdQuestionnaire(questionnaire.id)
                .subscribe(questions => this.nbQuestionsCreees += questions.length);
          }
        });
  }

  checkPasswords: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.updateUserForm.controls;
  }



  onSubmit() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.updateUserForm.invalid) {
      return;
    }

    delete this.updateUserForm.value.confirmPassword;

    // modifie l'utilisateur actuel
    this.userService.update(this.currentUser.id, this.updateUserForm.value)
        .pipe(first())
        .subscribe( data => {
          this.alertService.success('Modifications enregistrées', true);
          this.currentUser = this.authService.currentUserValue;
        }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  deleteAccount() {
    if (confirm('Etes-vous sûr de supprimer définitivement votre compte?')) {
      this.userService.delete(this.authService.currentUserValue.id)
          .pipe(first())
          .subscribe(() =>
              this.logout()
          );
    }
  }
}
