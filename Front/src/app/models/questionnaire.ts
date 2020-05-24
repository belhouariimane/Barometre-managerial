export class Questionnaire {
    id: number;
    idUser: number;
    titre: string;
    description: string;
    merci: string;
    isAnonymous: boolean;
    dateCreation: Date;
    datePeremption: Date;

    constructor() { }
}
