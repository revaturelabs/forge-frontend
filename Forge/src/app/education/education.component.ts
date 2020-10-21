import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  
  maxdate = new Date();
  mindate = new Date(1973, 0, 1);

  degrees:string[] = ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD"];

  portfolioForm = new FormGroup({
    degree: new FormControl('Select a Degree', Validators.required),
    university: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)] ),
    graduationDate: new FormControl('', Validators.required),
    major: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    minor: new FormControl('', [Validators.minLength(3), Validators.maxLength(40)])
  });

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit(){
    console.log("I currently cant submit anything");
    console.log(this.portfolioForm.value);
  }

  ngOnInit(): void {
  }
}