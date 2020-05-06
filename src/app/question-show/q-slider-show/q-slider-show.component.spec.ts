import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSliderShowComponent } from './q-slider-show.component';

describe('QSliderShowComponent', () => {
  let component: QSliderShowComponent;
  let fixture: ComponentFixture<QSliderShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSliderShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSliderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
