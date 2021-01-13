import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../models/education';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input() inputEducation: []; // decorate the property with @Input()
  @Output() addEducation = new EventEmitter<any>();

  education: Education = new Education();
  portfolio: Portfolio;
  portfolioItemId: number;

  maxdate = new Date();
  mindate = new Date(1973, 0, 1);

  degrees:string[] = ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD"];

  portfolioForm = new FormGroup({
    degree: new FormControl("Select a Degree", Validators.required),
    university: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')] ),
    graduation: new FormControl('', Validators.required),
    major: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    minor: new FormControl('', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])
  });
    
  onSubmit(){
    // Trying to create a new education and updating 
    console.log("in onSubmit of education component");
    // this.PortfolioService.getEducationById(this.portfolioItemId).subscribe(data => 
    // {
    //   this.education = data;
    //   console.log(data);
    // });
    this.education.itemType = "Education";
    this.education.education_id = 1;
    this.education.priority = 2;
    this.education.degree = this.portfolioForm.get('degree').value;
    this.education.graduation = this.portfolioForm.get('graduation').value;
    this.education.major = this.portfolioForm.get('major').value;
    this.education.minor = this.portfolioForm.get('minor').value;
    this.education.university = this.portfolioForm.get('university').value;
    console.log(this.education);
    this.PortfolioService.updateEducationById(this.education).subscribe(
      data2 => {
        console.log(data2);
        this.education = data2;
        this.addEducation.emit(this.portfolioForm.value);
      });
    // What is this doing?
    //this.portforolioForm.value
    // this.addEducation.emit(this.portfolio.portfolioSections);
    this.portfolioForm.reset();
  }

  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal, private PortfolioService: PotfolioServiceService) {}
  
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}