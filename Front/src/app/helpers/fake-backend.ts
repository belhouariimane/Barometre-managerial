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
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return registerUser();
                case url.match(/\/users\/update\/\d+$/) && method === 'POST':
                    return updateUser();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.match(/\/questionnaires\/update\/\d+$/) && method === 'POST':
                    return updateQuestionnaire();
                case url.endsWith('/questionnaires/register') || method === 'POST':
                    return registerQuestionnaire();
                case url.match(/\/questionnaires\/all\/\d+$/) && method === 'GET':
                    return getQuestionnairesByIdUser();
                case url.match(/\/questionnaires\/\d+$/) && method === 'GET':
                    return getQuestionnaireById();
                case url.match(/\/questionnaires\/\d+$/) && method === 'DELETE':
                    return deleteQuestionnaire();
                default:
                    return next.handle(request);
            }
        }

        // fonctions de routage

        // ----------------------------
        // FONCTIONS USER
        // ----------------------------

        // Valide ou non l'authentification
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

        // Enregistre l'utilisateur
        function registerUser() {
            const user = body;
            if (users.find(x => x.username === user.username)) {
                return error('Le nom d\'utilisateur "' + user.username + '" est déjà pris. Veuillez en choisir un autre.');
            }
            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // Met à jour l'utilisateur
        function updateUser() {
            const user = body;

            // dans un 1er temps, retire l'utilisateur de la liste via son id
            const updatedUser = users.find(x => x.id === idFromUrl());
            users = users.filter(x => x.id !== idFromUrl());

            // pour chacun de ses champs (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
            user.id = idFromUrl();
            user.firstName = user.firstName.length ? user.firstName : updatedUser.firstName;
            user.lastName = user.lastName.length ? user.lastName : updatedUser.lastName;
            user.username = user.username.length ? user.username : updatedUser.username;
            user.password = user.username.password ? user.password : updatedUser.password;

            // puis on ajoute ce même utilisateur modifié en gardant le même id
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(user));

            return ok();
        }

        // Récupère l'ensemble des utilisateurs
        function getUsers() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(users);
        }

        // Supprime un utilisateur
        function deleteUser() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // ----------------------------
        // FONCTIONS QUESTIONNAIRE
        // ----------------------------

        // Récupère tous les questionnaires créés par l'utilisateur en cours
        function getQuestionnairesByIdUser() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(questionnaires.filter(x => x.idUser === idFromUrl()));
        }

        // Récupère le questionnaire à partir de son id
        function getQuestionnaireById() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(questionnaires.find(x => x.id === idFromUrl()));
        }

        // Enregistre un questionnaire
        function registerQuestionnaire() {
            const questionnaire = body;
            questionnaire.id = questionnaires.length ? Math.max(...questionnaires.map(x => x.id)) + 1 : 1;
            questionnaires.push(questionnaire);
            console.log('Questionnaire enregistré');
            console.log('id : ' + questionnaire.id);
            console.log('idUser : ' + questionnaire.idUser);
            console.log('titre : ' + questionnaire.titre);
            console.log('description : ' + questionnaire.description);
            console.log('isAnonymous : ' + questionnaire.isAnonymous);
            console.log('dateCreation : ' + questionnaire.dateCreation);
            console.log('datePeremption : ' + questionnaire.datePeremption);

            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            return ok();
        }

        // Met à jour le questionnaire
        function updateQuestionnaire() {
            const questionnaire = body;
            // dans un 1er temps, retire le questionnaire de la liste via son id
            const updatedQuestionnaire = questionnaires.find(x => x.id === idFromUrl());
            questionnaires = questionnaires.filter(x => x.id !== idFromUrl());

            // pour chacun de ses champs (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
            questionnaire.id = idFromUrl();
            questionnaire.titre = questionnaire.titre.length ? questionnaire.titre : updatedQuestionnaire.titre;
            questionnaire.description = questionnaire.description.length ? questionnaire.description : updatedQuestionnaire.description;
            questionnaire.isAnonymous = updatedQuestionnaire.isAnonymous;

            // puis on ajoute ce même questionnaire modifié en gardant le même id
            questionnaires.push(questionnaire);
            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            return ok();
        }

        // Supprime un questionnaire
        function deleteQuestionnaire() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            questionnaires = questionnaires.filter(x => x.id !== idFromUrl());
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
