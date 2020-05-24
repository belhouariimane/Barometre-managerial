import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Reponse} from '../models/reponse';

@Injectable({ providedIn: 'root' })
export class ReponseService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestionAndIdUser(idQuestion: number, idUser: number) {
         return this.http.get<Reponse[]>(`/reponse/findByIdQuestion/${idQuestion}`);
        //return this.http.get<Reponse[]>(`${environment.apiUrl}/reponses/all/${idQuestion}&${idUser}`);
    }

    read(idReponse: number): Observable<Reponse> {
         return this.http.get<Reponse>(`/reponse/read/${idReponse}`);
        //return this.http.get<Reponse>(`${environment.apiUrl}/reponses/read/${idReponse}`);
    }

    create(reponse: Reponse) {
         return this.http.post(`/reponse/create`, reponse);
        //return this.http.post(`${environment.apiUrl}/reponses/create`, reponse);
    }

    update(id: number, reponse: Reponse) {
         return this.http.post(`/reponse/update/${id}`, reponse);
        //return this.http.post(`${environment.apiUrl}/reponses/update/${id}`, reponse);
    }

    delete(id: number) {
         return this.http.delete(`/reponse/delete/${id}`);
        //return this.http.delete(`${environment.apiUrl}/reponses/${id}`);
    }
}
