import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../models/questionnaire';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Questionnaire[]>(`${environment.apiUrl}/questionnaires`);
    }

    register(questionnaire: Questionnaire) {
        console.log('I am here');
        console.log(questionnaire.nbQuestions);
        return this.http.post(`${environment.apiUrl}/questionnaires/register`, questionnaire);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/questionnaires/${id}`);
    }
}
