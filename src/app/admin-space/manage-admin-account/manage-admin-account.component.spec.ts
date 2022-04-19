import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdminAccountComponent } from './manage-admin-account.component';

describe('ManageAdminAccountComponent', () => {
  let component: ManageAdminAccountComponent;
  let fixture: ComponentFixture<ManageAdminAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdminAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
