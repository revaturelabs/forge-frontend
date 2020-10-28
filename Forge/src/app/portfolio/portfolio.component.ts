import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio:Object;

  skills: any = [];
  skillNumber;

  constructor(private portfolioService: PotfolioServiceService,private router: Router) { 

  }

  ngOnInit(): void {
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.getPortfolio(splitUrl[splitUrl.length -1]);
    this.portfolioService.setPortfolio(this.portfolio);
  }

  getPortfolio(portfolioId){
    this.portfolioService.getPortfolioById(portfolioId).subscribe((data) =>{
      this.portfolio = data;
      let user;

      this.portfolioService.getUserByEmail(this.portfolio['belongsTo']).subscribe(
        (data) => {
          user = data;
          this.portfolio['myUser'] = user;
          console.log(this.portfolio);
        });
    })
  }
  
  updateEducation(education:any){
    education['id'] = this.portfolio['education']['0']['id'];
    this.portfolio['education'].splice(0, 1);
    this.portfolio['education'].push(education);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();    
  }

  updateAboutMe(aboutMeInfo:any){
    this.portfolio['aboutMe']['description'] = aboutMeInfo;
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();    
  }

  updateIndustryEq(industryEq:any){
    console.log('updating industryEq');
    console.log(industryEq);
    console.log('This is the current Portfolio');
    console.log(this.portfolio);
  }
  
  addSkill(){
    this.skillNumber++;
    this.skills.push(this.skillNumber);
  }

  removeSkill(){
    this.skillNumber--;
    this.skills.pop();
  }
}
