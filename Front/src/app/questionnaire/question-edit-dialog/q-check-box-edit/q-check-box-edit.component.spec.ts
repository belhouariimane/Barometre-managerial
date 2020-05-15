import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCheckBoxEditComponent } from './q-check-box-edit.component';

describe('QCheckBoxEditComponent', () => {
  let component: QCheckBoxEditComponent;
  let fixture: ComponentFixture<QCheckBoxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCheckBoxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCheckBoxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
