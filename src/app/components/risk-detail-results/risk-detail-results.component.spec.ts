import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailResultsComponent } from './risk-detail-results.component';

describe('RiskDetailResultsComponent', () => {
  let component: RiskDetailResultsComponent;
  let fixture: ComponentFixture<RiskDetailResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
