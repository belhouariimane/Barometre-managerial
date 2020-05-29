import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {User} from '../models/user';
import {Questionnaire} from '../models/questionnaire';
import {Proposition} from '../models/proposition';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestionnaire(idQuestionnaire: number) {
        const questionnaire = new Questionnaire();
        questionnaire.id = idQuestionnaire;
        return this.http.get<Question[]>(`${environment.apiUrl}/question/findByIdQuestionnaire/${idQuestionnaire}`);
    }

    read(idQuestion: number): Observable<Question> {
        return this.http.get<any>(`${environment.apiUrl}/question/read/${idQuestion}`)
            .pipe(map(data => {
                return data.question;
            }));
    }

    create(question: Question, propositions: Proposition[]) {
        function replacer(key: string, value: any) {
            if (key === 'idQuestionnaire' || key === 'idTheme') {
                return undefined;
            }
            return value;
        }
        question.questionnaire = new Questionnaire();
        question.questionnaire.id = question.idQuestionnaire;
        question.propositions = propositions;
        const questStr = JSON.stringify(question, replacer);
        return this.http.post(`${environment.apiUrl}/question/create`, JSON.parse(questStr));
    }

    update(id: number, question: Question, propositions: Proposition[]) {
        function replacer(key: string, value: any) {
            if (key === 'idQuestionnaire' || key === 'idTheme') {
                return undefined;
            }
            return value;
        }
        question.propositions = propositions;
        question.id = id;
        const questStr = JSON.stringify(question, replacer);
        return this.http.post(`${environment.apiUrl}/question/update`, JSON.parse(questStr));
    }

    // update spécifique pour mettre à jour uniquement l'ordre d'affichage
    updateOrder(question: Question) {
        function replacer(key: string, value: any) {
            if (key === 'idQuestionnaire' || key === 'questionnaire') {
                return undefined;
            }
            return value;
        }
        const questStr = JSON.stringify(question, replacer);
        return this.http.post(`${environment.apiUrl}/question/update`, JSON.parse(questStr));
    }

    delete(id: number) {
         return this.http.delete(`${environment.apiUrl}/question/delete/${id}`);
    }
}
