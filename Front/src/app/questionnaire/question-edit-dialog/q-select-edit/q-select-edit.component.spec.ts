import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSelectEditComponent } from './q-select-edit.component';

describe('QSelectEditComponent', () => {
  let component: QSelectEditComponent;
  let fixture: ComponentFixture<QSelectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSelectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSelectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
