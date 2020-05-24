import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../services/question.service';
import {PropositionService} from '../../services/proposition.service';
import {Question} from '../../models/question';
import {Proposition} from '../../models/proposition';

@Component({
    selector: 'app-question-show',
    templateUrl: './question-show.component.html',
    styleUrls: ['./question-show.component.scss']
})
export class QuestionShowComponent implements OnInit, OnChanges {
    @Input() idQuestion;
    chosenResponse: string;
    idQuestionnaire: number;
    propositions = [];
    question: Question;
    type: string;
    apercuQuestion: boolean;

    constructor(private route: ActivatedRoute,
                private questionService: QuestionService,
                private propositionService: PropositionService) { }

    ngOnInit() {
        this.idQuestionnaire = this.route.snapshot.params.idQuestionnaire;
        this.apercuQuestion = false;
        // Cas où on affiche uniquement la question (aperçu) et pas tout le questionnaire
        if (this.idQuestion === undefined) {
            this.idQuestion = this.route.snapshot.params.idQuestion;
            this.apercuQuestion = true;
        }
        this.questionService.read(this.idQuestion)
            .subscribe(question => {
                this.question = question;
                if (question.type === 'radio' || question.type === 'check' || question.type === 'select') {
                    this.loadAllPropositions();
                }
            });
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    loadAllPropositions() {
        this.propositionService.readAllByIdQuestion(this.idQuestion)
            .subscribe(propositions => this.propositions = propositions);
    }

}
