import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthOpportunityComponent } from './growth-opportunity.component';

describe('GrowthOpportunityComponent', () => {
  let component: GrowthOpportunityComponent;
  let fixture: ComponentFixture<GrowthOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
