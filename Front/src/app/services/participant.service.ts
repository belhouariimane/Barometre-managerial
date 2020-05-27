import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participant} from '../models/participant';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ParticipantService {

    constructor(private http: HttpClient) { }

    create(participant: Participant) {
        console.log(JSON.stringify(participant));

        //return this.http.post(`/public/participant/create`, JSON.stringify(participant));
        return this.http.post(`${environment.apiUrl}/public//participant/create`, JSON.stringify(participant));
    }

    readAll() {
        return this.http.get<Participant[]>(`${environment.apiUrl}/participant/readAll`);
    }

}
