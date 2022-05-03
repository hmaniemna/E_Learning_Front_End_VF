import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsSComponent } from './tests-s.component';

describe('TestsSComponent', () => {
  let component: TestsSComponent;
  let fixture: ComponentFixture<TestsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
