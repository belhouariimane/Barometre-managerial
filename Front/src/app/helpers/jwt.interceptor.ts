import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
/* L'intercepteur JWT intercepte les demandes http de l'application pour ajouter un jeton d'authentification HWT
 * à l'en-tête Authorization si l'utilisateur est connecté.
 */
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log('on intercept');
        const currentUser = this.authService.currentUserValue;
        console.log(currentUser);
        console.log(request.url);
        const re = 'public';

        if (request.url.search(re) === -1) {
            if (currentUser) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser['tokenJwt']}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}

