export class Question {

  constructor(
    public idQuestion: number,
    public libelle: string = '',
    public type: string,
    public isRequired: boolean,
    public propositions: string[],
    public order: number
  ) {

  }

  setQuestion(libelle: string = '',
              type: string,
              isRequired: boolean,
              propositions: string[]) {
    this.isRequired = isRequired;
    this.libelle = libelle;
    this.type = type;
    this.propositions = propositions;
  }
}
