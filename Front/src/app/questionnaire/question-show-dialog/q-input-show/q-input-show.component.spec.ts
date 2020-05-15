import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QInputShowComponent } from './q-input-show.component';

describe('QInputShowComponent', () => {
  let component: QInputShowComponent;
  let fixture: ComponentFixture<QInputShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QInputShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QInputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
