import {User} from './user';

export class Questionnaire {
    id: number;
    idUser: number;
    titre: string;
    description: string;
    remerciement: string;
    anonymous: boolean;
    administrateur: User;
    dateCreation: Date;
    datePeremption: Date;
    url: string;

    constructor() { }

    toString() {
        console.log('--- QUESTIONNAIRE ---');
        console.log('id: ' + this.id);
        console.log('idUser: ' + this.idUser);
        console.log('titre: ' + this.titre);
        console.log('description: ' + this.description);
        console.log('remerciement: ' + this.remerciement);
        console.log('anonymous: ' + this.anonymous);
        console.log('administrateur: ' + this.administrateur);
        console.log('dateCreation: ' + this.dateCreation);
        console.log('datePeremption: ' + this.datePeremption);
        console.log('url: ' + this.url);
    }
}
