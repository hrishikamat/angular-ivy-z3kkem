import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskInsightsMainComponent } from './risk-insights-main.component';

describe('RiskInsightsMainComponent', () => {
  let component: RiskInsightsMainComponent;
  let fixture: ComponentFixture<RiskInsightsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskInsightsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskInsightsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
