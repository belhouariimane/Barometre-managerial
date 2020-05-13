import { Component } from '@angular/core';
import {User} from './models/user';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/* Le composant app est le composant racine de l'application, il définit la balise racine avec la propriété du selector de @Component
 * Il s'abonne à la variable currentUser observable dans le service d'authentification afin de pouvoir afficher / masquer de manière
 * réactive la barre de navigation principale lorsque l'utilisateur se connecte / déconnecte de l'application.
 *
 */
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authService: AuthService,
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  myAccount() {
    this.router.navigate(['/myaccount']);
  }
}
