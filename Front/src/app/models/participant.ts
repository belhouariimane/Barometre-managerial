import {Reponse} from './reponse';

export class Participant {

    // le participant n'a pas besoin de posséder un compte pour répondre à un questionnaire
    id: number;
    nom: string;
    prenom: string;
    // identifiant du questionnaire auquel le participant répond
    idQuestionnaire: number;
    // ensemble des réponses du participant
    reponses: Reponse[];

    constructor() {}
}
