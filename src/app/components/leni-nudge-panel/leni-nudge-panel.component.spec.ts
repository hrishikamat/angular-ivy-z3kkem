import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeniNudgePanelComponent } from './leni-nudge-panel.component';

describe('LeniNudgePanelComponent', () => {
  let component: LeniNudgePanelComponent;
  let fixture: ComponentFixture<LeniNudgePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeniNudgePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeniNudgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
