import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = [];

  skills: any = [];
  skillNumber;

  constructor(private portfolioService: PotfolioServiceService) { }

  ngOnInit(): void {
    this.getPortfolio(1);
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

  // updatePortfolio(status: string){
  //   let user;
  //   this.portfolioService.getUserByEmail(this.portfolio['belongsTo']).subscribe(
  //     (data) => {
  //       user = data;
  //       this.portfolio['myUser'] = user;
        
  //       console.log("Updated portfolio information: " + JSON.stringify(this.portfolio));
  //       this.portfolioService.updatePortfolio(this.portfolio).subscribe();
  //     });
  // }
  
  updateEducation(education:any){
    this.portfolio['education'].splice(0, 1);
    this.portfolio['education'].push(education);
  }

  updateAboutMe(aboutMeInfo:any){
    console.log('updating about me info');
    console.log(aboutMeInfo);
    console.log('This is the current Portfolio');
    console.log(this.portfolio);
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
