export class Question {

  constructor(
    public idQuestion: number,
    public libelle: string = '',
    public type: string,
    public isRequired: boolean,
    public propositions: object,
    public order: number
  ) {

  }
}
