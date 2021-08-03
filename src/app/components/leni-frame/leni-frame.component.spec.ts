import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeniFrameComponent } from './leni-frame.component';

describe('LeniFrameComponent', () => {
  let component: LeniFrameComponent;
  let fixture: ComponentFixture<LeniFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeniFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeniFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
