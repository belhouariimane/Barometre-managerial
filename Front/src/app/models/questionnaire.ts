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
}
