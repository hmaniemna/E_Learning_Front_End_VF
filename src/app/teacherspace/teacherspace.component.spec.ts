import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherspaceComponent } from './teacherspace.component';

describe('TeacherspaceComponent', () => {
  let component: TeacherspaceComponent;
  let fixture: ComponentFixture<TeacherspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
