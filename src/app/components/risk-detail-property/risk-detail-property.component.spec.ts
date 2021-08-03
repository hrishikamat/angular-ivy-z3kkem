import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailPropertyComponent } from './risk-detail-property.component';

describe('RiskDetailPropertyComponent', () => {
  let component: RiskDetailPropertyComponent;
  let fixture: ComponentFixture<RiskDetailPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
