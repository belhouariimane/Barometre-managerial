import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireShowComponent } from './questionnaire-show.component';

describe('QuestionnaireShowComponent', () => {
  let component: QuestionnaireShowComponent;
  let fixture: ComponentFixture<QuestionnaireShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
