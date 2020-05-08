import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryRetryWhenComponent } from './retry-retry-when.component';

describe('RetryRetryWhenComponent', () => {
  let component: RetryRetryWhenComponent;
  let fixture: ComponentFixture<RetryRetryWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetryRetryWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryRetryWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
