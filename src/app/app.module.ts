import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { QRadioBtnShowComponent } from './question-show/q-radio-btn-show/q-radio-btn-show.component';
import { QCheckBoxShowComponent } from './question-show/q-check-box-show/q-check-box-show.component';
import { QSliderShowComponent } from './question-show/q-slider-show/q-slider-show.component';
import { QDateTimeShowComponent } from './question-show/q-date-time-show/q-date-time-show.component';
import { QInputShowComponent } from './question-show/q-input-show/q-input-show.component';
import { QSelectShowComponent } from './question-show/q-select-show/q-select-show.component';
import { QSelectEditComponent } from './question-edit/q-select-edit/q-select-edit.component';
import { QInputEditComponent } from './question-edit/q-input-edit/q-input-edit.component';
import { QDateTimeEditComponent } from './question-edit/q-date-time-edit/q-date-time-edit.component';
import { QSliderEditComponent } from './question-edit/q-slider-edit/q-slider-edit.component';
import { QCheckBoxEditComponent } from './question-edit/q-check-box-edit/q-check-box-edit.component';
import { QRadioBtnEditComponent } from './question-edit/q-radio-btn-edit/q-radio-btn-edit.component';

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
    QRadioBtnEditComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
