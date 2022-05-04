import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerCalComponent } from './scheduler-cal.component';

describe('SchedulerCalComponent', () => {
  let component: SchedulerCalComponent;
  let fixture: ComponentFixture<SchedulerCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
