import {Question} from './question';

export class Questionnaire {

    constructor(
        public idQuestionaire: number,
        public libelleQuestionnaire: string = '',
        public questions: Question[]
    ) {
    }
}
