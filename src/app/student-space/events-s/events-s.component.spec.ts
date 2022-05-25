import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSComponent } from './events-s.component';

describe('EventsSComponent', () => {
  let component: EventsSComponent;
  let fixture: ComponentFixture<EventsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
