export class User {
    id: number;
    email: string;
    password: string;
    prenom: string;
    nom: string;
    // token utilisé pour contenir le jeton JWT renvoyé par l'API en cas d'authentification réussie
    token: string;
    dateCreation: Date;

    constructor() {}
}
