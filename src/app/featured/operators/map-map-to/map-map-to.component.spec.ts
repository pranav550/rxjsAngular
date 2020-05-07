import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMapToComponent } from './map-map-to.component';

describe('MapMapToComponent', () => {
  let component: MapMapToComponent;
  let fixture: ComponentFixture<MapMapToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMapToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
