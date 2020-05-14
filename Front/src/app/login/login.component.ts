import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AlertService} from '../services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/* Le composant de connexion utilise le service d'authentification pour se connecter à l'application.
 * Si l'utilisateur est déjà connecté, il est automatiquement redirigé vers la page d'accueil.
 * L'objet loginForm: FormGroup définit les contrôles et les validateurs du formulaires et est utilisé pour accéder
 * aux données entrées dans le formulaire.
 */
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private alertService: AlertService
  ) {
    // Redirige vers la page d'accueil si l'utilisateur est déjà connecté
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // récupère l'url de retour à partir des paramètres ou par défaut à '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // accès plus facile aux champs du formulaire
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // réinitialise les alertes lors de la soumission du formulaire
    this.alertService.clear();

    // s'arrête ici si le formulaire n'est pas valide
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            date => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
        );
  }
}
