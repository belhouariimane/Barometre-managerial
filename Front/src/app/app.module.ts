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
    MatSelectModule, MatTableModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

import { QRadioBtnShowComponent } from './questionnaire/question-show/q-radio-btn-show/q-radio-btn-show.component';
import { QCheckBoxShowComponent } from './questionnaire/question-show/q-check-box-show/q-check-box-show.component';
import { QSliderShowComponent } from './questionnaire/question-show/q-slider-show/q-slider-show.component';
import { QDateTimeShowComponent } from './questionnaire/question-show/q-date-time-show/q-date-time-show.component';
import { QInputShowComponent } from './questionnaire/question-show/q-input-show/q-input-show.component';
import { QSelectShowComponent } from './questionnaire/question-show/q-select-show/q-select-show.component';
import { QSelectEditComponent } from './questionnaire/question-edit/q-select-edit/q-select-edit.component';
import { QInputEditComponent } from './questionnaire/question-edit/q-input-edit/q-input-edit.component';
import { QDateTimeEditComponent } from './questionnaire/question-edit/q-date-time-edit/q-date-time-edit.component';
import { QSliderEditComponent } from './questionnaire/question-edit/q-slider-edit/q-slider-edit.component';
import { QCheckBoxEditComponent } from './questionnaire/question-edit/q-check-box-edit/q-check-box-edit.component';
import { QRadioBtnEditComponent } from './questionnaire/question-edit/q-radio-btn-edit/q-radio-btn-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionnaireEditComponent } from './questionnaire/questionnaire-edit/questionnaire-edit.component';
import { QuestionnaireShowComponent } from './questionnaire/questionnaire-show/questionnaire-show.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioGroup} from '@angular/material/typings/radio';
import { DeleteQuestionComponent } from './questionnaire/delete-question/delete-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QRadioBtnShowComponent,
    QCheckBoxShowComponent,
    QSliderShowComponent,
    QDateTimeShowComponent,
    QInputShowComponent,
    QSelectShowComponent,
    QSelectEditComponent,
    QInputEditComponent,
    QDateTimeEditComponent,
    QSliderEditComponent,
    QCheckBoxEditComponent,
    QRadioBtnEditComponent,
    QuestionnaireEditComponent,
    QuestionnaireShowComponent,
    DeleteQuestionComponent
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
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule
    ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [
      QRadioBtnShowComponent,
      QCheckBoxShowComponent,
      QSliderShowComponent,
      QDateTimeShowComponent,
      QInputShowComponent,
      QSelectShowComponent,
      QSelectEditComponent,
      QInputEditComponent,
      QDateTimeEditComponent,
      QSliderEditComponent,
      QCheckBoxEditComponent,
      QRadioBtnEditComponent,
      DeleteQuestionComponent
    ],
})
export class AppModule { }
