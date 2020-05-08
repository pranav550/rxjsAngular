import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipWhileSkipUntilComponent } from './skip-while-skip-until.component';

describe('SkipWhileSkipUntilComponent', () => {
  let component: SkipWhileSkipUntilComponent;
  let fixture: ComponentFixture<SkipWhileSkipUntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipWhileSkipUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipWhileSkipUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
