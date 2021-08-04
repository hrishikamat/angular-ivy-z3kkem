import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuthCallBackComponent } from './oauth-call-back.component';

describe('OAuthCallBackComponent', () => {
  let component: OAuthCallBackComponent;
  let fixture: ComponentFixture<OAuthCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OAuthCallBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuthCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
