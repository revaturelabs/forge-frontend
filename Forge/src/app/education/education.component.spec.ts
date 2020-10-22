import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
     // imports: [ReactiveFormsModule, FormGroup]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('university field validity', () => {
    let errors = {};
    let university = component.portfolioForm.controls['university'];

    //university field is required
    errors = university.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set university to something incorrect minlength 3
    university.setValue("At");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    //expect(errors['whitespace']).toBeFalse();

    // Set university to something incorrect white space
    university.setValue("    ");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['whitespace']).toBeTrue();

    // Set university to something correct
    university.setValue("My University is great");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('major field validity', () => {
    let errors = {};
    let major = component.portfolioForm.controls['major'];

    //major field is required
    errors = major.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set major to something incorrect min length 3
    major.setValue("At");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set major to something incorrect white space
    major.setValue("    ");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['whitespace']).toBeTrue();
    
    // Set major to something correct
    major.setValue("Art");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();

  });

  it('minor field validity', () => {
    let errors = {};
    let minor = component.portfolioForm.controls['minor'];

    // Set minor to something incorrect min length 3
    minor.setValue("At");
    errors = minor.errors || {};
    expect(errors['minlength']).toBeTruthy();
 

    // Set minor to something correct
    minor.setValue("Art");
    errors = minor.errors || {};
    expect(errors['minlength']).toBeFalsy();

  });


  it('Degree field validity ', () => {
    let errors = {};
    let degree = component.portfolioForm.controls['degree'];

    //Degree field is required
    errors = degree.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it(' should change the value on selection change', () => {
    //fixture.detectChanges;
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-degree')).nativeElement;

    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe("Bachelor's Degree");
    });
  });
});
