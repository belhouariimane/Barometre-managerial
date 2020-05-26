export class Reponse {
    // identifiant de la réponse
    id: number;
    // identifiant de la question
    idQuestion: number;
    // tableau contenant les identifiants des propositions sélectionnées par le participant
    // concerne les questions à choix unique (radio), multiples (checkbox)
    // et les questions de sélection (combobox)
    idsProposition: number[];
    // valeur textuelle saisie par le participant
    // concerne les questions ouvertes et les dates
    valeur: string;

    constructor() {}
}
