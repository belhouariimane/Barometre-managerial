import {Questionnaire} from './questionnaire';
import {Reponse} from './reponse';

export class Participation {

    id: number;
    nom: string;
    prenom: string;
    questionnaire: Questionnaire;
    reponses: Reponse[];
    libelle: string;
    idQuestion: number;
    order: number;

    constructor() {}
}
