import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRadioBtnEditComponent } from './q-radio-btn-edit.component';

describe('QRadioBtnEditComponent', () => {
  let component: QRadioBtnEditComponent;
  let fixture: ComponentFixture<QRadioBtnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRadioBtnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRadioBtnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
