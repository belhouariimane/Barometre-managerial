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
        return this.http.get<Question[]>(`question/findByIdQuestionnaire/${idQuestionnaire}`);
        // return this.http.get<Question[]>(`${environment.apiUrl}/questions/all/${idQuestionnaire}`);
    }

    read(idQuestion: number): Observable<Question> {
        return this.http.get<any>(`/question/read/${idQuestion}`)
            .pipe(map(data => {
                return data.question;
            }));
        // return this.http.get<Question>(`${environment.apiUrl}/questions/read/${idQuestion}`);
    }

    create(question: Question, propositions: Proposition[]) {
        function replacer(key: string, value: any) {
            if (key === 'idQuestionnaire' || key === 'idTheme' || key === 'merci') {
                return undefined;
            }
            return value;
        }
        question.questionnaire = new Questionnaire();
        question.questionnaire.id = question.idQuestionnaire;
        question.propositions = propositions;
        const questStr = JSON.stringify(question, replacer);
        console.log(questStr);
        return this.http.post(`/question/create`, JSON.parse(questStr));
        // return this.http.post(`${environment.apiUrl}/questions/create`, question);
    }

    update(id: number, question: Question, propositions: Proposition[]) {
        function replacer(key: string, value: any) {
            if (key === 'idQuestionnaire' || key === 'idTheme' || key === 'merci') {
                return undefined;
            }
            return value;
        }
        question.questionnaire = new Questionnaire();
        question.questionnaire.id = question.idQuestionnaire;
        question.propositions = propositions;
        const questStr = JSON.stringify(question, replacer);
        console.log(questStr);
        return this.http.post(`/question/update/${id}`, JSON.parse(questStr));
        // return this.http.post(`${environment.apiUrl}/questions/update/${id}`, question);
    }

    delete(id: number) {
         return this.http.delete(`/question/delete/${id}`);
        // return this.http.delete(`${environment.apiUrl}/questions/${id}`);
    }
}
