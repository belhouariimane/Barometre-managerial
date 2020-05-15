import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../models/questionnaire';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {

    constructor(private http: HttpClient) { }

    getAllByIdUser(idUser: number) {
        return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaires/all/${idUser}`);
    }

    getById(idQuestionnaire: number): Observable<Questionnaire> {
        return this.http.get<Questionnaire>(`${environment.apiUrl}/questionnaires/${idQuestionnaire}`);
    }

    register(questionnaire: Questionnaire) {
        return this.http.post(`${environment.apiUrl}/questionnaires/register`, questionnaire);
    }

    update(id: number, questionnaire: Questionnaire) {
        return this.http.post(`${environment.apiUrl}/questionnaires/update/${id}`, questionnaire);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/questionnaires/${id}`);
    }
}
