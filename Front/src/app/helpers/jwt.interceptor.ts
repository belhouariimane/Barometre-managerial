import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
/* L'intercepteur JWT intercepte les demandes http de l'application pour ajouter un jeton d'authentification HWT
 * à l'en-tête Authorization si l'utilisateur est connecté.
 */
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
               setHeaders: {
                   Authorization: `Bearer ${currentUser.token}`
               }
            });
        }
        return next.handle(request);
    }
}
