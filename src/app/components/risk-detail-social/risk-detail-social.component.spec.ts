import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailSocialComponent } from './risk-detail-social.component';

describe('RiskDetailSocialComponent', () => {
  let component: RiskDetailSocialComponent;
  let fixture: ComponentFixture<RiskDetailSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
