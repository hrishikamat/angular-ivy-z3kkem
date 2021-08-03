import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskScoreResultsComponent } from './risk-score-results.component';

describe('RiskScoreResultsComponent', () => {
  let component: RiskScoreResultsComponent;
  let fixture: ComponentFixture<RiskScoreResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskScoreResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskScoreResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
