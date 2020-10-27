import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: any = [];

  skills: any = [];
  skillNumber;

  constructor(private portfolioService: PotfolioServiceService) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio(){
    this.portfolioService.getPortfolioById(1).subscribe((data) =>{
      this.portfolio = data;
      //this.portfolio.push(this.user);
      console.log(this.portfolio);
    })
  }

  updateEducation(education:any){
    this.portfolio['education'].push(education);
    this.portfolio['education'].splice(0, 1);
  }

  updateUserInfo(userInfo:any){
    // this.portfolio['user'].push(userInfo);
    // this.portfolio['user'].splice(0, 1);
    console.log('updating user info');
    console.log(userInfo);
  }

  addSkill(){
    this.skillNumber++;
    this.skills.push(this.skillNumber);
    console.log(this.skillNumber);
  }
}
