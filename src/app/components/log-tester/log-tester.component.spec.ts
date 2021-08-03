import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTesterComponent } from './log-tester.component';

describe('LogTesterComponent', () => {
  let component: LogTesterComponent;
  let fixture: ComponentFixture<LogTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
