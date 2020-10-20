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
    degree: new FormControl('', Validators.required),
    university: new FormControl('', Validators.required),
    graduationDate: new FormControl('', Validators.required),
    major: new FormControl('', Validators.required),
    minor: new FormControl('')
  });

  onSubmit(){
    console.log("I currently cant submit anything");
  }

  ngOnInit(): void {
  }
}
