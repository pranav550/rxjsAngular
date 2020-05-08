import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapConcatMapToComponent } from './concat-map-concat-map-to.component';

describe('ConcatMapConcatMapToComponent', () => {
  let component: ConcatMapConcatMapToComponent;
  let fixture: ComponentFixture<ConcatMapConcatMapToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapConcatMapToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapConcatMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
