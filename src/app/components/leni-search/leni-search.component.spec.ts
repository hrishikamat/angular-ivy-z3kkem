import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeniSearchComponent } from './leni-search.component';

describe('LeniSearchComponent', () => {
  let component: LeniSearchComponent;
  let fixture: ComponentFixture<LeniSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeniSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
