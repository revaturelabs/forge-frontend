import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortViewComponent } from './admin-port-view.component';

describe('AdminPortViewComponent', () => {
  let component: AdminPortViewComponent;
  let fixture: ComponentFixture<AdminPortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
