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
import {ResultatComponent} from './resultat/resultat.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'edit-questionnaire/:id', component: QuestionnaireEditComponent },
  { path: 'edit-questionnaire', component: QuestionnaireEditComponent },
  { path: 'show-questionnaire/:id', component: QuestionnaireShowComponent },
  { path: 'edit-question/:idQuestionnaire/:idQuestion', component: QuestionEditComponent },
  { path: 'edit-question/:idQuestionnaire', component: QuestionEditComponent },
  { path: 'show-question/:idQuestionnaire/:idQuestion', component: QuestionShowComponent },
  { path: 'statistique', component: ResultatComponent },


  // sinon, redirige vers la page d'accueil
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
