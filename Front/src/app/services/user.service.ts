import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

/* Le service utilisateur contient un ensemble standard de méthodes CRUD pour la gestion des utilisateurs.
 * Il sert d'interface entre l'application Angular et l'API backend.
 */
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
         return this.http.get<User[]>(`${environment.apiUrl}/admin/readAll`);
    }

    read(id: number) {
        return this.http.get<any>(`${environment.apiUrl}/admin/read/${id}`)
            .pipe(map(user => {
                return user.retour;
            }));
    }

    register(user: User) {
        user.dateCreation = new Date(Date.now());
        return this.http.post(`${environment.apiUrl}/public/admin/create`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/admin/delete/${id}`);
        // return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }

    update(id: number, user: User) {
        delete user.id;
        return this.http.put(`${environment.apiUrl}/admin/update/${id}`, user);
        // return this.http.post(`${environment.apiUrl}/users/update/${id}`, user);

    }
}
