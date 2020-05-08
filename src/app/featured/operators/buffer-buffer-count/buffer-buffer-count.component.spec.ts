import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferBufferCountComponent } from './buffer-buffer-count.component';

describe('BufferBufferCountComponent', () => {
  let component: BufferBufferCountComponent;
  let fixture: ComponentFixture<BufferBufferCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferBufferCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferBufferCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
