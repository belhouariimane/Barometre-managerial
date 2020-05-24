import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAnswerComponent } from './questionnaire-answer.component';

describe('QuestionnaireAnswerComponent', () => {
  let component: QuestionnaireAnswerComponent;
  let fixture: ComponentFixture<QuestionnaireAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
