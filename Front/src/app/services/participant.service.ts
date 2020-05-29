import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Participant} from '../models/participant';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParticipantService {

    constructor(private http: HttpClient) { }

    create(participant: Participant) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(`/public/participant/create`, JSON.stringify(participant), {headers});
    }

    readAllByIdQuestionnaire(idQuestionnaire: number): Observable<Participant[]> {
        return this.http.get<any>(`/participant/readAll`)
            .pipe(map(data => {
               return data.retour.filter(x => x.idQuestionnaire === idQuestionnaire);
            }));
    }
}
