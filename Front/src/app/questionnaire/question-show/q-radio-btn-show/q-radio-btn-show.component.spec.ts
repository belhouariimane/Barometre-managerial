import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRadioBtnShowComponent } from './q-radio-btn-show.component';

describe('QRadioBtnShowComponent', () => {
  let component: QRadioBtnShowComponent;
  let fixture: ComponentFixture<QRadioBtnShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRadioBtnShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRadioBtnShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
