import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Proposition} from '../models/proposition';

@Injectable({ providedIn: 'root' })
export class PropositionService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestion(idQuestion: number) {
        return this.http.get<Proposition[]>(`/proposition/findByIdQuestion/${idQuestion}`);
        //return this.http.get<Proposition[]>(`/propositions/${idQuestion}`);
    }

    create(proposition: Proposition) {
         return this.http.post(`/proposition/create`, proposition);
        //return this.http.post(`/propositions/`, proposition);
    }

    deleteAll(idQuestion: number) {
        return this.http.delete(`/propositions/${idQuestion}`);
    }
}
