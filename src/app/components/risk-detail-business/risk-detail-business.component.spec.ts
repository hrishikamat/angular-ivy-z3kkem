import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailBusinessComponent } from './risk-detail-business.component';

describe('RiskDetailBusinessComponent', () => {
  let component: RiskDetailBusinessComponent;
  let fixture: ComponentFixture<RiskDetailBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
