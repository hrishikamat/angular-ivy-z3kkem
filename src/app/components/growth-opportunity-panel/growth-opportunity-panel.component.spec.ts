import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthOpportunityPanelComponent } from './growth-opportunity-panel.component';

describe('GrowthOpportunityPanelComponent', () => {
  let component: GrowthOpportunityPanelComponent;
  let fixture: ComponentFixture<GrowthOpportunityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthOpportunityPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthOpportunityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
