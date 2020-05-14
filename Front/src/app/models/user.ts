export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    // token utilisé pour contenir le jeton JWT renvoyé par l'API en cas d'authentification réussie
    token: string;
}
