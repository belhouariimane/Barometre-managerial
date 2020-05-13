import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {register} from 'ts-node';
import {error} from 'util';
import {ok} from 'assert';
import {User} from '../models/user';

let users = JSON.parse(localStorage.getItem('users')) || [];
let questionnaires = JSON.parse(localStorage.getItem('questionnaires')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            // console.log('url : ' + url);
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.match(/\/users\/update\/\d+$/) && method === 'POST':
                    return updateUser();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/questionnaires/register') || method === 'POST':
                    console.log('Nouveau questionnaire');
                    return registerQuestionnaire();
                case url.endsWith('/questionnaires') && method === 'GET':
                    return getQuestionnaires();
                case url.match(/\/questionnaires\/\d+$/) && method === 'DELETE':
                    return deleteQuestionnaire();
                default:
                    return next.handle(request);
            }
        }

        // fonctions de routage

        function authenticate() {
            const { username, password } = body;
            const user = users.find( x => x.username === username && x.password === password);
            if (!user) {
                return error('Le nom d\'utilisateur ou le mot de passe est incorrect.');
            }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }

        function register() {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Le nom d\'utilisateur "' + user.username + '" est déjà pris. Veuillez en choisir un autre.');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function updateUser() {
            const user = body;
            console.log('user : ' + user.id + ', '+ user.firstName + ', ' + user.lastName + ', ' + user.username + ', ' + user.password);

            // dans un 1er temps, retire l'utilisateur de la liste via son id
            const updatedUser = users.find(x => x.id === idFromUrl());
            users = users.filter(x => x.id !== idFromUrl());

            // pour chacun de ses champs (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
            user.id = idFromUrl();
            user.firstName = user.firstName.length ? user.firstName : updatedUser.firstName;
            user.lastName = user.lastName.length ? user.lastName : updatedUser.lastName;
            user.username = user.username.length ? user.username : updatedUser.username;
            user.password = user.username.password ? user.password : updatedUser.password;

            console.log('updatedUser : ' + user.id + user.firstName + ', ' + user.lastName + ', ' + user.username + ', ' + user.password);

            // puis on ajoute ce même utilisateur modifié en gardant le même id
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(user));

            return ok();
        }

        function registerQuestionnaire() {
            const questionnaire = body;
            questionnaire.idQuestionnaire = questionnaire.length ? Math.max(...questionnaire.map(x => x.id)) + 1 : 1;
            questionnaires.push(questionnaire);
            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            console.log('Nouveau questionnaire enregistré');
            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(users);
        }

        function getQuestionnaires() {
            console.log('affichage des questionnaires');
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(questionnaires);
        }

        function deleteUser() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function deleteQuestionnaire() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            questionnaires = questionnaires.filter(x => x.idQuestionnaire !== idFromUrl());
            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            return ok();
        }


        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({error: { message }});
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
