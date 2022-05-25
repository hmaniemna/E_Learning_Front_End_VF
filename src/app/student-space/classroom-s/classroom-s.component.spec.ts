import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSComponent } from './classroom-s.component';

describe('ClassroomSComponent', () => {
  let component: ClassroomSComponent;
  let fixture: ComponentFixture<ClassroomSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
