import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {register} from 'ts-node';
import {error} from 'util';
import {ok} from 'assert';
import {User} from '../models/user';
import {Question} from '../models/question';
import {environment} from '../../environments/environment';

let users = JSON.parse(localStorage.getItem('users')) || [];
let questionnaires = JSON.parse(localStorage.getItem('questionnaires')) || [];
let questions = JSON.parse(localStorage.getItem('questions')) || [];
let propositions = JSON.parse(localStorage.getItem('propositions')) || [];
let themes = JSON.parse(localStorage.getItem('themes')) || [];

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
            console.log(url);
            switch (true) {
                // USERS
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

                // QUESTIONNAIRES
                case url.match(/\/questionnaires\/update\/\d+$/) && method === 'POST':
                    return updateQuestionnaire();
                case url.endsWith('/questionnaires/register') && method === 'POST':
                    return registerQuestionnaire();
                case url.match(/\/questionnaires\/all\/\d+$/) && method === 'GET':
                    return getQuestionnairesByIdUser();
                case url.match(/\/questionnaires\/\d+$/) && method === 'GET':
                    return getQuestionnaireById();
                case url.match(/\/questionnaires\/\d+$/) && method === 'DELETE':
                    return deleteQuestionnaire();

                // QUESTIONS
                case url.match(/\/questions\/update\/\d+$/) && method === 'POST':
                    return updateQuestion();
                case url.endsWith('/questions/create') && method === 'POST':
                    return createQuestion();
                case url.match(/\/questions\/all\/\d+$/) && method === 'GET':
                    return getQuestionsByIdQuestionnaire();
                case url.match(/\/questions\/read\/\d+$/) && method === 'GET':
                    return getQuestionById();
                case url.match(/\/questions\/\d+$/) && method === 'DELETE':
                    return deleteQuestion();

                // PROPOSITIONS
                case url.endsWith('/propositions/') && method === 'POST':
                    return createProposition();
                case url.match(/\/propositions\/\d+$/) && method === 'GET':
                    return getPropositions();
                case url.match(/\/propositions\/\d+$/) && method === 'DELETE':
                    return deletePropositions();

                // THEMES
                case url.endsWith('/themes/') && method === 'POST':
                    return createTheme();
                case url.match(/\/themes\/\d+$/) && method === 'GET':
                    return getThemes();
                case url.match(/\/themes\/\d+$/) && method === 'DELETE':
                    return deleteThemes();

                default:
                    console.log('default');
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
            checkLog();
            return ok(users);
        }

        // Supprime un utilisateur
        function deleteUser() {
            checkLog();
            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // ----------------------------
        // FONCTIONS QUESTIONNAIRE
        // ----------------------------

        // Récupère tous les questionnaires créés par l'utilisateur en cours
        function getQuestionnairesByIdUser() {
            checkLog();
            return ok(questionnaires.filter(x => x.idUser === idFromUrl()));
            // return ok(questionnaires.filter(x => x.idUser === idFromUrl()));
        }

        // Récupère le questionnaire à partir de son id
        function getQuestionnaireById() {
            return ok(questionnaires.find(x => x.id === idFromUrl()));
        }

        // Enregistre un questionnaire
        function registerQuestionnaire() {
            checkLog();
            const questionnaire = body;
            questionnaire.id = questionnaires.length ? Math.max(...questionnaires.map(x => x.id)) + 1 : 1;
            questionnaires.push(questionnaire);
            console.log('Questionnaire créé');
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
            checkLog();
            const questionnaire = body;
            // dans un 1er temps, retire le questionnaire de la liste via son id
            const updatedQuestionnaire = questionnaires.find(x => x.id === idFromUrl());
            questionnaires = questionnaires.filter(x => x.id !== idFromUrl());

            // pour chacun de ses champs non booléen (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
            // pour les booléens, on laisse tel quel
            questionnaire.id = idFromUrl();
            questionnaire.titre = questionnaire.titre.length ? questionnaire.titre : updatedQuestionnaire.titre;
            questionnaire.description = questionnaire.description.length ? questionnaire.description : updatedQuestionnaire.description;
            questionnaire.idUser = questionnaire.idUser !== undefined ? questionnaire.idUser : updatedQuestionnaire.idUser;
            questionnaire.isAnonymous = questionnaire.isAnonymous;

            console.log('Questionnaire mis à jour');
            console.log('id : ' + questionnaire.id);
            console.log('idUser : ' + questionnaire.idUser);
            console.log('titre : ' + questionnaire.titre);
            console.log('description : ' + questionnaire.description);
            console.log('isAnonymous : ' + questionnaire.isAnonymous);
            console.log('dateCreation : ' + questionnaire.dateCreation);
            console.log('datePeremption : ' + questionnaire.datePeremption);

            // puis on ajoute ce même questionnaire modifié en gardant le même id
            questionnaires.push(questionnaire);
            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            return ok();
        }

        // Supprime un questionnaire
        function deleteQuestionnaire() {
            checkLog();
            questionnaires = questionnaires.filter(x => x.id !== idFromUrl());
            localStorage.setItem('questionnaires', JSON.stringify(questionnaires));
            return ok();
        }

        // FONCTIONS QUESTIONS
        function createQuestion() {
            checkLog();
            const question = body;
            question.id = questions.length ? Math.max(...questions.map(x => x.id)) + 1 : 1;
            console.log('Nouvel IDQuestion : ' + question.id);
            questions.push(question);
            console.log('Question créée');
            console.log('id : ' + question.id);
            console.log('idQuestionnaire : ' + question.idQuestionnaire);
            console.log('idTheme : ' + question.idTheme);
            console.log('titre : ' + question.titre);
            console.log('type : ' + question.type);
            console.log('isRequired : ' + question.isRequired);
            console.log('isFilter : ' + question.isFilter);
            console.log('hasGraph : ' + question.hasGraph);
            console.log('order : ' + question.order);

            localStorage.setItem('questions', JSON.stringify(questions));
            return ok();
        }

        function  updateQuestion() {
            checkLog();
            const question = body;
            // dans un 1er temps, retire la question de la liste via son id
            const updatedQuestion = questions.find(x => x.id === idFromUrl());
            questions = questions.filter(x => x.id !== idFromUrl());

            // pour chacun de ses champs non booléens (sauf id) on met à jour seulement si une valeur est renseignée dans le formulaire
            // pour les booléens on laisse tel quel
            question.id = idFromUrl();
            question.titre = question.titre.length ? question.titre : updatedQuestion.titre;
            question.type = question.type.length ? question.type : updatedQuestion.type;
            question.idTheme = question.idTheme !== undefined ? question.idTheme : updatedQuestion.idTheme;
            question.idQuestionnaire = question.idQuestionnaire !== undefined ? question.idQuestionnaire : updatedQuestion.idQuestionnaire;

            // puis on ajoute cette même question modifiée en gardant le même id
            questions.push(question);

            console.log('Question mise à jour');
            console.log('id : ' + question.id);
            console.log('idQuestionnaire : ' + question.idQuestionnaire);
            console.log('idTheme : ' + question.idTheme);
            console.log('titre : ' + question.titre);
            console.log('type : ' + question.type);
            console.log('isRequired : ' + question.isRequired);
            console.log('isFilter : ' + question.isFilter);
            console.log('hasGraph : ' + question.hasGraph);
            console.log('order : ' + question.order);

            localStorage.setItem('questions', JSON.stringify(questions));
            return ok();
        }

        function deleteQuestion() {
            checkLog();
            questions = questions.filter(x => x.id !== idFromUrl());
            localStorage.setItem('questions', JSON.stringify(questions));
            return ok();
        }

        function getQuestionById() {
            return ok(questions.find(x => x.id === idFromUrl()));
        }

        function getQuestionsByIdQuestionnaire() {
            return ok(questions.filter(x => x.idQuestionnaire <= 1 && x.idQuestionnaire >= 1));
            // return ok(questions.filter(x => x.idQuestionnaire === idFromUrl()));
        }

        // FONCTIONS PROPOSITIONS

        function getPropositions() {
            return ok(propositions.filter(x => x.idQuestion === idFromUrl()));
        }

        function createProposition() {
            checkLog();
            const proposition = body;
            proposition.id = propositions.length ? Math.max(...propositions.map(x => x.id)) + 1 : 1;
            propositions.push(proposition);
            console.log('Proposition créée');
            console.log('id : ' + proposition.id);
            console.log('idQuestion : ' + proposition.idQuestion);
            console.log('libelle : ' + proposition.libelle);
            console.log('order : ' + proposition.order);
            localStorage.setItem('propositions', JSON.stringify(propositions));
            return ok();
        }

        function deletePropositions() {
            checkLog();
            propositions = propositions.filter(x => x.idQuestion !== idFromUrl());
            localStorage.setItem('propositions', JSON.stringify(propositions));
            return ok();
        }


        // FONCTIONS THEMES

        function getThemes() {
            return ok(themes.filter(x => x.idQuestionnaire === idFromUrl()));
        }

        function createTheme() {
            checkLog();
            const theme = body;
            theme.id = themes.length ? Math.max(...themes.map(x => x.id)) + 1 : 1;
            themes.push(theme);
            localStorage.setItem('themes', JSON.stringify(themes));
            return ok();
        }

        function deleteThemes() {
            checkLog();
            themes = themes.filter(x => x.idQuestionnaire !== idFromUrl());
            localStorage.setItem('themes', JSON.stringify(themes));
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

        function checkLog() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
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
