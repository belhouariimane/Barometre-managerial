import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';
import {QuestionnaireService} from '../services/questionnaire.service';
import {Questionnaire} from '../models/questionnaire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// Le composant home contient la logique permettant d'afficher l'utilisateur actuel ainsi que la liste de tous ses questionnaires
export class HomeComponent implements OnInit {
  currentUser: User;
  private newQuest: Questionnaire;
  users = [];
  questionnaires = [];
  counter = 0;

  constructor(
      private authService: AuthService,
      private userService: UserService,
      private questionnaireService: QuestionnaireService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllQuestionnaires();
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
  }

  deleteUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
  }

  private loadAllQuestionnaires() {
    this.questionnaireService.getAll()
        .pipe(first())
        .subscribe(questionnaires => this.questionnaires = questionnaires);
  }

  deleteQuestionnaire(id: number) {
    this.questionnaireService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllQuestionnaires());
  }

  onNewQuestionnaire() {
    this.newQuest = new Questionnaire();
    this.newQuest.titre = 'Nouveau titre';
    this.newQuest.isAnonymous = false;
    this.newQuest.idQuestionnaire = ++this.counter;
    this.newQuest.nbQuestions = Math.floor(Math.random() * 11);
    this.questionnaireService.register(this.newQuest);
    this.loadAllQuestionnaires();
  }
}
