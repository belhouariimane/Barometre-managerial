import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';
import {QuestionnaireService} from '../services/questionnaire.service';
import {Questionnaire} from '../models/questionnaire';
import {Router} from '@angular/router';
import {QuestionService} from '../services/question.service';
import {environment} from '../../environments/environment';
import {ParticipantService} from '../services/participant.service';
import {Participant} from '../models/participant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// Le composant home contient la logique permettant d'afficher l'utilisateur actuel ainsi que la liste de tous ses questionnaires
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  participants = [];
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
    this.loadAllUsers();
    this.loadAllParticipants();
    this.loadAllQuestionnaires();
  }

  // provisoire, à supprimer par la suite
  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
  }

  // provisoire, à supprimer par la suite
  private loadAllParticipants() {
    // this.participantService.readAll()
    //     .subscribe(participants => this.participants = participants);
  }

  deleteUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  // Charge la liste de questionnaires en fonction de l'id de l'utilisateur
  private loadAllQuestionnaires() {
    this.questionnaireService.getAllByIdUser(this.currentUser.id)
        .pipe(first())
        .subscribe(questionnaires => {
          this.questionnaires = questionnaires;
          this.loadNbQuestions();
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
}