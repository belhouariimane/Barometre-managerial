import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Proposition} from '../models/proposition';

@Injectable({ providedIn: 'root' })
export class PropositionService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestion(idQuestion: number) {
        // return this.http.get<Proposition[]>(`${environment.apiUrl}/proposition/findByIdQuestion/${idQuestion}`);
        return this.http.get<Proposition[]>(`${environment.apiUrl}/propositions/${idQuestion}`);
    }

    create(proposition: Proposition) {
        // return this.http.post(`${environment.apiUrl}/proposition/create`, proposition);
        return this.http.post(`${environment.apiUrl}/propositions/`, proposition);
    }

    deleteAll(idQuestion: number) {
        return this.http.delete(`${environment.apiUrl}/propositions/${idQuestion}`);
    }
}
