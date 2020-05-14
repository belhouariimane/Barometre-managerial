import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({ providedIn: 'root' })

// La garde d'authentification est utilisée pour empêcher les utilisateurs non authentifiés
// d'accéder aux pages réservées aux utilisateurs connectés.
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // Autorisé donc retourne vrai
            return true;
        }

        // Non connecté donc redirection vers la page de connexion avec l'url retourné
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
        return false;
    }
}
