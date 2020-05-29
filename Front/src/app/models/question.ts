import {Questionnaire} from './questionnaire';
import {Proposition} from './proposition';

export class Question {

  id: number;
  valeur: string;
  typeQuestion: string;
  isRequired: boolean;
  isFilter: boolean;
  hasGraph: boolean;
  ordre: number;
  idTheme: number;
  idQuestionnaire: number;
  questionnaire: Questionnaire;
  propositions: Proposition[];

  constructor() {}
}
