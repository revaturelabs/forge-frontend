import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserHomeComponent } from './user-home.component';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //bug fix test to see if portfolio object was created
  it ('should create portfolio object on createPortfolio()', () => {
    expect(component.portfolio).toBeDefined();
    component.newPortfolio();
    expect(component.newPortfolio()).toBeDefined();
    expect(component.portfolio).toBeTruthy();
  });

});