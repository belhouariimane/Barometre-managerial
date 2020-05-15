export class Questionnaire {
    id: number;
    titre: string;
    description: string;
    isAnonymous: boolean;
    dateCreation: Date;
    datePeremption: Date;
    idUser: number;

    constructor() { }
}
