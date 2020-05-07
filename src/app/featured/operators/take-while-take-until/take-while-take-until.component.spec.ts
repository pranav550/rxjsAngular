import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeWhileTakeUntilComponent } from './take-while-take-until.component';

describe('TakeWhileTakeUntilComponent', () => {
  let component: TakeWhileTakeUntilComponent;
  let fixture: ComponentFixture<TakeWhileTakeUntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeWhileTakeUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeWhileTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
