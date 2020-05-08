import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDebounceTimeComponent } from './debounce-debounce-time.component';

describe('DebounceDebounceTimeComponent', () => {
  let component: DebounceDebounceTimeComponent;
  let fixture: ComponentFixture<DebounceDebounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceDebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
