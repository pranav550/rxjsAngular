import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferTimeBufferToggleComponent } from './buffer-time-buffer-toggle.component';

describe('BufferTimeBufferToggleComponent', () => {
  let component: BufferTimeBufferToggleComponent;
  let fixture: ComponentFixture<BufferTimeBufferToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferTimeBufferToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferTimeBufferToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
