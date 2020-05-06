import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QInputEditComponent } from './q-input-edit.component';

describe('QInputEditComponent', () => {
  let component: QInputEditComponent;
  let fixture: ComponentFixture<QInputEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QInputEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QInputEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
