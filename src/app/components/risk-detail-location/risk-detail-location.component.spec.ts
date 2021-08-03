import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailLocationComponent } from './risk-detail-location.component';

describe('RiskDetailLocationComponent', () => {
  let component: RiskDetailLocationComponent;
  let fixture: ComponentFixture<RiskDetailLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
