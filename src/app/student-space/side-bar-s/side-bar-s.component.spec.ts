import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSComponent } from './side-bar-s.component';

describe('SideBarSComponent', () => {
  let component: SideBarSComponent;
  let fixture: ComponentFixture<SideBarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
