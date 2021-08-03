import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeniNudgeViewComponent } from './leni-nudge-view.component';

describe('LeniNudgeViewComponent', () => {
  let component: LeniNudgeViewComponent;
  let fixture: ComponentFixture<LeniNudgeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeniNudgeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeniNudgeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
