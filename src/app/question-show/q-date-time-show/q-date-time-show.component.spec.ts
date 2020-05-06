import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QDateTimeShowComponent } from './q-date-time-show.component';

describe('QDateTimeShowComponent', () => {
  let component: QDateTimeShowComponent;
  let fixture: ComponentFixture<QDateTimeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QDateTimeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QDateTimeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
