import {Injectable} from '@angular/core';
import {BehaviorSubject, config, Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable({ providedIn: 'root' })

/* Le service d'authentification est utilisé pour se connecter et se déconnecter de l'application.
 * Pour se connecter, il affiche les informations d'identification de l'utilisateur sur l'API et vérifie la réponse pour un jeton JWT.
 */
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email, password) {
         return this.http.post<any>(`/public/admin/login`, { email, password })
         // return this.http.post<any>(`/users/authenticate`, { email, password })
            .pipe(map(user => {
               // stocke les détails de l'utilisateur + le jeton jwt dans le stockaqe local pour conserver
               // la connexion de l'utilisateur entre le rafraîchissement des pages
                localStorage.setItem('currentUser', JSON.stringify(user.retour));
                this.currentUserSubject.next(user.retour);
                return user.retour;
            }));
    }

    logout() {
        // supprime l'utilisateur du stockage local et définit l'utilisateur actuel à null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    update(user: User) {
        user.email = user.email.length === 0 ? this.currentUserValue.email : user.email;
        user.password = user.password.length === 0 ? this.currentUserValue.password : user.password;
        user.nom = user.nom.length === 0 ? this.currentUserValue.nom : user.nom;
        user.prenom = user.prenom.length === 0 ? this.currentUserValue.prenom : user.prenom;
        user.id = this.currentUserValue.id;
        console.log(user.email);
        console.log(user.password);
        console.log(user.nom);
        console.log(user.prenom);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
}
