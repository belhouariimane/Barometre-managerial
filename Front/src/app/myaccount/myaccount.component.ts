import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {AlertService} from '../services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  updateUserForm: FormGroup;
  updatePasswordForm: FormGroup;
  loading = false;
  submitted = false;
  currentUser: User;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private alertService: AlertService,
              private router: Router) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      firstName: [this.authService.currentUserValue.firstName],
      lastName: [this.authService.currentUserValue.lastName],
      username: [this.authService.currentUserValue.username],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.minLength(6)]
    }, { validators: this.checkPasswords});
  }

  checkPasswords: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { 'notSame': true }
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
    // const dialogRef = this.dialog.open(HTMLDialogElement);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('fermé');
    // });
    // this.userService.delete(this.authService.currentUserValue.id);
    // this.router.navigate(['/login']);
  }

}
