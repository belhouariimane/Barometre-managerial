import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {QuestionnaireEditComponent} from './questionnaire/questionnaire-edit/questionnaire-edit.component';
import {QuestionnaireShowComponent} from './questionnaire/questionnaire-show/questionnaire-show.component';
import {QuestionEditComponent} from './question/question-edit/question-edit.component';
import {QuestionShowComponent} from './question/question-show/question-show.component';
import {QuestionnaireAnswerComponent} from './questionnaire/questionnaire-answer/questionnaire-answer.component';
import {ResultatComponent} from './resultat/resultat.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myaccount', component: MyaccountComponent, canActivate: [AuthGuard] },
  { path: 'edit-questionnaire/:id', component: QuestionnaireEditComponent, canActivate: [AuthGuard] },
  { path: 'edit-questionnaire', component: QuestionnaireEditComponent, canActivate: [AuthGuard] },
  { path: 'show-questionnaire/:id', component: QuestionnaireShowComponent, canActivate: [AuthGuard] },
  { path: 'answer/:id', component: QuestionnaireAnswerComponent },
  { path: 'edit-question/:idQuestionnaire/:idQuestion', component: QuestionEditComponent, canActivate: [AuthGuard] },
  { path: 'edit-question/:idQuestionnaire', component: QuestionEditComponent, canActivate: [AuthGuard] },
  { path: 'show-question/:idQuestionnaire/:idQuestion', component: QuestionShowComponent, canActivate: [AuthGuard] },
  { path: 'statistiques/:id', component: ResultatComponent, canActivate: [AuthGuard] },


  // sinon, redirige vers la page d'accueil
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
