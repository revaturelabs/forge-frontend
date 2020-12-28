import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addProject', () => {
    spyOn(component, "addProject");

    let button: HTMLSelectElement = fixture.debugElement.query(By.css('.add-button')).nativeElement;
    button.click();

    expect(component.addProject).toHaveBeenCalled();
  });

  // it('should call deleteProject', () => {
  //   spyOn(component, 'deleteProject');

    
  //   expect(component.addProject).toHaveBeenCalled();
  // });
});
