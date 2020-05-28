import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../models/questionnaire';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {

    constructor(private http: HttpClient) { }

    getAllByIdUser(idUser: number) {
        return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaire/findByIdAdministrateur/${idUser}`);
    }

    getById(idQuestionnaire: number): Observable<Questionnaire> {
        return this.http.get<any>(`${environment.apiUrl}/questionnaire/read/${idQuestionnaire}`)
            .pipe(map(data => {
                return data.questionnaire;
                }));
    }

    register(questionnaire: Questionnaire): Observable<any> {
        function replacer(key: string, value: any) {
            if (key === 'idUser') {
                return undefined;
            }
            return value;
        }
        questionnaire.administrateur = new User();
        questionnaire.administrateur.id = questionnaire.idUser;
        questionnaire.dateCreation = new Date(Date.now());
        questionnaire.datePeremption = new Date(2020, 12, 15);
        questionnaire.url = environment.apiUrl + '/answer/' + questionnaire.id;
        const questStr = JSON.stringify(questionnaire, replacer);
        return this.http.post(`${environment.apiUrl}/questionnaire/create`, JSON.parse(questStr));
        // return this.http.post(`${environment.apiUrl}/questionnaires/register`, questionnaire);
    }

    update(id: number, questionnaire: Questionnaire) {
        function replacer(key: string, value: any) {
            if (key === 'idUser') {
                return undefined;
            }
            return value;
        }
        questionnaire.datePeremption = new Date(2030, 12, 15);
        questionnaire.url = environment.apiUrl + '/answer/' + id;
        questionnaire.id = id;
        const questStr = JSON.stringify(questionnaire, replacer);
        return this.http.post(`${environment.apiUrl}/questionnaire/update`, JSON.parse(questStr));
        // return this.http.post(`${environment.apiUrl}/questionnaires/update/${id}`, questionnaire);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/questionnaire/delete/${id}`);
        // return this.http.delete(`${environment.apiUrl}/questionnaires/${id}`);
    }
}
