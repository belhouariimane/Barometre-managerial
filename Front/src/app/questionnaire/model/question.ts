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
}
