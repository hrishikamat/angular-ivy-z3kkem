import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScoreLeadGenerationPanelComponent } from './prescore-leadgenerator-panel.component';

describe('GrowthOpportunityPanelComponent', () => {
  let component: PreScoreLeadGenerationPanelComponent;
  let fixture: ComponentFixture<PreScoreLeadGenerationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreScoreLeadGenerationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScoreLeadGenerationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
