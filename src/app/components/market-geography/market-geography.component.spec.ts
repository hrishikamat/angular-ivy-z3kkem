import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketGeographyComponent } from './market-geography.component';

describe('MarketGeographyComponent', () => {
  let component: MarketGeographyComponent;
  let fixture: ComponentFixture<MarketGeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketGeographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
