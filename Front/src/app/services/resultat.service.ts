import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reponse} from '../models/reponse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<any> {
    return this.http.get<any>(`/statistique/${id}`);
  }

}

