import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participant} from '../models/participant';
import {User} from '../models/user';

@Injectable({ providedIn: 'root' })
export class ParticipantService {

    constructor(private http: HttpClient) { }

    create(participant: Participant) {
        console.log(JSON.stringify(participant));
        return this.http.post(`/participant/create`, JSON.stringify(participant));
    }

    readAll() {
        return this.http.get<Participant[]>(`/participant/readAll`);
    }

}
