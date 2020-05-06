import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QDateTimeEditComponent } from './q-date-time-edit.component';

describe('QDateTimeEditComponent', () => {
  let component: QDateTimeEditComponent;
  let fixture: ComponentFixture<QDateTimeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QDateTimeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QDateTimeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
