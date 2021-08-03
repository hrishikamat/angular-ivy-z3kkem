import { TestBed } from '@angular/core/testing';

import { LeniService } from './leni.service';

describe('LeniNudgesService', () => {
  let service: LeniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
