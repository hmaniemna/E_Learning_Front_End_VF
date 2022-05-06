import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomTeacherComponent } from './classroom-teacher.component';

describe('ClassroomTeacherComponent', () => {
  let component: ClassroomTeacherComponent;
  let fixture: ComponentFixture<ClassroomTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
