import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMergeMapMergeAllComponent } from './merge-merge-map-merge-all.component';

describe('MergeMergeMapMergeAllComponent', () => {
  let component: MergeMergeMapMergeAllComponent;
  let fixture: ComponentFixture<MergeMergeMapMergeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeMergeMapMergeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMergeMapMergeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
