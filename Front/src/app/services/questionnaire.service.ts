import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../models/questionnaire';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {

    constructor(private http: HttpClient) { }

    getAllByIdUser(idUser: number) {
        // return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaire/findByIdAdministrateur/${idUser}`);
        return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaires/all/${idUser}`);
    }

    getById(idQuestionnaire: number): Observable<Questionnaire> {
        // return this.http.get<Questionnaire>(`${environment.apiUrl}/questionnaire/read/${idQuestionnaire}`);
        return this.http.get<Questionnaire>(`${environment.apiUrl}/questionnaires/${idQuestionnaire}`);
    }

    register(questionnaire: Questionnaire) {
        // return this.http.post(`${environment.apiUrl}/questionnaire/create`, questionnaire);
        return this.http.post(`${environment.apiUrl}/questionnaires/register`, questionnaire);
    }

    update(id: number, questionnaire: Questionnaire) {
        // return this.http.post(`${environment.apiUrl}/questionnaire/update/${id}`, questionnaire);
        return this.http.post(`${environment.apiUrl}/questionnaires/update/${id}`, questionnaire);
    }

    delete(id: number) {
        // return this.http.delete(`${environment.apiUrl}/questionnaire/delete/${id}`);
        return this.http.delete(`${environment.apiUrl}/questionnaires/${id}`);
    }
}
