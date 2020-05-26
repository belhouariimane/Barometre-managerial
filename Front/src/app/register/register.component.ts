import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {AlertService} from '../services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

/* Le composant d'enregistrement crée un nouvel utilisateur avec le service utilisateur lors de l'envoi du formulaire de registre.
 * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
 */
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private userService: UserService,
      private alertService: AlertService
  ) {
    // redirige vers la page d'accueil si l'utilisateur est déjà connecté
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.checkPasswords});
  }

  checkPasswords: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
      const pass = group.get('password').value;
      const confirmPass = group.get('confirmPassword').value;
      return pass === confirmPass ? null : { 'notSame': true };
  }

  // accès simplifié aux champs du formulaire
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire est invalide
    if (this.registerForm.invalid) {
      return;
    }

    // enregistre le nouvel utilisateur puis le connecte immédiatement
    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success('Inscription enregistrée', true);
              this.authService.login(this.f.email.value, this.f.password.value)
                  .pipe(first())
                  .subscribe(
                      date => {
                        this.router.navigate(['/']);
                      },
                      error => {
                        this.alertService.error(error);
                        this.loading = false;
                      }
                  );
            }, error => {
              this.alertService.error(error);
              this.loading = false;
            }
        );
  }
}
