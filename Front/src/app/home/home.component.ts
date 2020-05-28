import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';
import {QuestionnaireService} from '../services/questionnaire.service';
import {QuestionService} from '../services/question.service';
import {environment} from '../../environments/environment';
import {ParticipantService} from '../services/participant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// Le composant home contient la logique permettant d'afficher l'utilisateur actuel ainsi que la liste de tous ses questionnaires
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  questionnaires = [];
  apiUrl: string;

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private questionnaireService: QuestionnaireService,
      private questionService: QuestionService,
      private participantService: ParticipantService
  ) {
    this.currentUser = this.authService.currentUserValue;
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.loadAllQuestionnaires();
  }

  // Charge la liste de questionnaires en fonction de l'id de l'utilisateur
  private loadAllQuestionnaires() {
    this.questionnaireService.getAllByIdUser(this.currentUser.id)
        .pipe(first())
        .subscribe(questionnaires => {
          this.questionnaires = questionnaires;
          this.questionnaires.forEach((item) => {
              item.dateCreation = new Date(item.dateCreation).toLocaleDateString();
              item.datePeremption = new Date(item.datePeremption).toLocaleDateString();
          });
          this.loadNbQuestions();
          this.loadNbParticipations();
        });
  }

  deleteQuestionnaire(id: number) {
    this.questionnaireService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllQuestionnaires());
  }

  loadNbQuestions() {
    for (const questionnaire of this.questionnaires) {
      this.questionService.readAllByIdQuestionnaire(questionnaire.id)
          .subscribe(questions => {
            questionnaire.nbQuestions = questions !== undefined ? questions.length : 0;
          });
    }
  }

  loadNbParticipations() {
    for (const questionnaire of this.questionnaires) {
      this.participantService.readAllByIdQuestionnaire(questionnaire.id)
          .subscribe(participants => {
            questionnaire.nbParticipants = participants.length;
          });
    }
  }
}
