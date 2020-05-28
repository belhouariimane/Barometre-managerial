import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule, MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule,
    MatSelectModule, MatSliderModule, MatSnackBar, MatSnackBarModule, MatTableModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionnaireEditComponent } from './questionnaire/questionnaire-edit/questionnaire-edit.component';
import { QuestionnaireShowComponent } from './questionnaire/questionnaire-show/questionnaire-show.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import { MyaccountComponent } from './myaccount/myaccount.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './resultat/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './resultat/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './resultat/pie-chart/pie-chart.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { QuestionnaireAnswerComponent } from './questionnaire/questionnaire-answer/questionnaire-answer.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireEditComponent,
    QuestionnaireShowComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    QuestionnaireShowComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    ResultatComponent,
    QuestionEditComponent,
    QuestionShowComponent,
    QuestionnaireAnswerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        HttpClientModule,
        MatRadioModule,
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        ChartsModule,
        MatTabsModule,
        MatExpansionModule,
        MatSliderModule,
        MatTooltipModule
    ],
  providers: [
      // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      //
      // // création de fausses données en attendant le back ...
      // fakeBackendProvider,
      MatDatepickerModule
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
