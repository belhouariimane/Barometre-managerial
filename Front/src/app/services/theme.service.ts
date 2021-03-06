import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Proposition} from '../models/proposition';
import {Theme} from '../models/theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    constructor(private http: HttpClient) { }

    readAllByIdQuestionnaire(idQuestionnaire: number) {
        return this.http.get<Theme[]>(`/themes/${idQuestionnaire}`);
    }

    create(theme: Theme) {
        return this.http.post(`/themes/`, theme);
    }

    deleteAll(idQuestionnaire: number) {
        return this.http.delete(`/themes/${idQuestionnaire}`);
    }
}
