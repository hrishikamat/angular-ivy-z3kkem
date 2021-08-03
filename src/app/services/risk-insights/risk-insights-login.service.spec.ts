import { TestBed } from '@angular/core/testing';

import { RiskInsightsLoginService } from './risk-insights-login.service';

describe('RiskInsightsLoginService', () => {
  let service: RiskInsightsLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskInsightsLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
