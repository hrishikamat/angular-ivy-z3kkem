import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailWeatherComponent } from './risk-detail-weather.component';

describe('RiskDetailWeatherComponent', () => {
  let component: RiskDetailWeatherComponent;
  let fixture: ComponentFixture<RiskDetailWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
