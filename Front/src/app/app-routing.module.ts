import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {QuestionnaireEditComponent} from './questionnaire/questionnaire-edit/questionnaire-edit.component';
import {QuestionnaireShowComponent} from './questionnaire/questionnaire-show/questionnaire-show.component';
import {BarChartComponent} from './resultat/bar-chart/bar-chart.component';
import {PieChartComponent} from './resultat/pie-chart/pie-chart.component';
import {DoughnutChartComponent} from './resultat/doughnut-chart/doughnut-chart.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'edit-questionnaire/:id', component: QuestionnaireEditComponent },
  { path: 'edit-questionnaire', component: QuestionnaireEditComponent },
  { path: 'show-questionnaire', component: QuestionnaireShowComponent },
  { path: 'resultat/bar-chart', component: BarChartComponent },
  { path: 'resultat/pie-chart', component: PieChartComponent },
  { path: 'resultat/doughnut-chart', component: DoughnutChartComponent },


  // sinon, redirige vers la page d'accueil
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
