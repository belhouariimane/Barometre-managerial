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
        questionnaire.dateCreation.setHours(questionnaire.dateCreation.getHours() + 2);
        questionnaire.url = environment.apiUrl + '/answer/' + questionnaire.id;
        const questStr = JSON.stringify(questionnaire, replacer);
        return this.http.post(`${environment.apiUrl}/questionnaire/create`, JSON.parse(questStr));
    }

    update(id: number, questionnaire: Questionnaire) {
        function replacer(key: string, value: any) {
            if (key === 'idUser') {
                return undefined;
            }
            return value;
        }
        questionnaire.url = environment.apiUrl + '/answer/' + id;
        questionnaire.id = id;
        if (questionnaire.datePeremption === undefined) {
          questionnaire.datePeremption = new Date(Date.now());
        }
        const questStr = JSON.stringify(questionnaire, replacer);
        return this.http.post(`${environment.apiUrl}/questionnaire/update`, JSON.parse(questStr));
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/questionnaire/delete/${id}`);
    }

}

