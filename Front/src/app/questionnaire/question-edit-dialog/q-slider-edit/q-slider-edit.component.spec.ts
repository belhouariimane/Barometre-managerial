import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSliderEditComponent } from './q-slider-edit.component';

describe('QSliderEditComponent', () => {
  let component: QSliderEditComponent;
  let fixture: ComponentFixture<QSliderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSliderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSliderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
