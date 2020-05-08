import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipSkipLastComponent } from './skip-skip-last.component';

describe('SkipSkipLastComponent', () => {
  let component: SkipSkipLastComponent;
  let fixture: ComponentFixture<SkipSkipLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipSkipLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipSkipLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
