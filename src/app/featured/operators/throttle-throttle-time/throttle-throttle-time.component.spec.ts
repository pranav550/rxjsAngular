import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleThrottleTimeComponent } from './throttle-throttle-time.component';

describe('ThrottleThrottleTimeComponent', () => {
  let component: ThrottleThrottleTimeComponent;
  let fixture: ComponentFixture<ThrottleThrottleTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottleThrottleTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleThrottleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
