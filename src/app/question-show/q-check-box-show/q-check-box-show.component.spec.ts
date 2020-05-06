import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCheckBoxShowComponent } from './q-check-box-show.component';

describe('QCheckBoxShowComponent', () => {
  let component: QCheckBoxShowComponent;
  let fixture: ComponentFixture<QCheckBoxShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCheckBoxShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCheckBoxShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
