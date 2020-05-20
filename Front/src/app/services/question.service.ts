import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Question} from '../models/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestionnaire(idQuestionnaire: number) {
        // return this.http.get<Question[]>(`${environment.apiUrl}/question/findByIdQuestionnaire/${idQuestionnaire}`);
        return this.http.get<Question[]>(`${environment.apiUrl}/questions/all/${idQuestionnaire}`);
    }

    read(idQuestion: number): Observable<Question> {
        // return this.http.get<Question>(`${environment.apiUrl}/question/read/${idQuestion}`);
        return this.http.get<Question>(`${environment.apiUrl}/questions/read/${idQuestion}`);
    }

    create(question: Question) {
        // return this.http.post(`${environment.apiUrl}/question/create`, question);
        return this.http.post(`${environment.apiUrl}/questions/create`, question);
    }

    update(id: number, question: Question) {
        // return this.http.post(`${environment.apiUrl}/question/update/${id}`, question);
        return this.http.post(`${environment.apiUrl}/questions/update/${id}`, question);
    }

    delete(id: number) {
        // return this.http.delete(`${environment.apiUrl}/question/delete/${id}`);
        return this.http.delete(`${environment.apiUrl}/questions/${id}`);
    }
}
