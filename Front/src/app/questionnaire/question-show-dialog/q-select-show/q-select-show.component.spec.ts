import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSelectShowComponent } from './q-select-show.component';

describe('QSelectShowComponent', () => {
  let component: QSelectShowComponent;
  let fixture: ComponentFixture<QSelectShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSelectShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSelectShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
