import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineSComponent } from './time-line-s.component';

describe('TimeLineSComponent', () => {
  let component: TimeLineSComponent;
  let fixture: ComponentFixture<TimeLineSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
