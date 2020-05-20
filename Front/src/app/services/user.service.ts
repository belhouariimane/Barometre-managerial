import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })

/* Le service utilisateur contient un ensemble standard de méthodes CRUD pour la gestion des utilisateurs.
 * Il sert d'interface entre l'application Angular et l'API backend.
 */
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        // return this.http.get<User[]>(`${environment.apiUrl}/admin/all`);
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    register(user: User) {
        // return this.http.post(`${environment.apiUrl}/admin/create`, user);
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        // return this.http.delete(`${environment.apiUrl}/admin/delete/${id}`);
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }

    update(id: number, user: User) {
        // return this.http.post(`${environment.apiUrl}/admin/update/${id}`, user);
        return this.http.post(`${environment.apiUrl}/users/update/${id}`, user);
    }
}
