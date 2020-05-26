import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable()
/* L'intercepteur d'erreur intercepte les réponses http de l'API pour vérifier s'il y a eu des erreurs.
 * S'il y a une réponse 401 non autorisée, l'utilisateur est automatiquement déconnecté de l'application,
 * toutes les autres erreurs sont renvoyées au service appelant afin qu'une alerte puisse être affichée à l'utilisateur
 */
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // Déconnexion automatique si la réponse de l'API est 401
                this.authService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
