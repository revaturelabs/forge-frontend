import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Router } from '@angular/router';
import { Criteria } from '../models/criteria';
import { CriteriaService } from '../service/criteria.service';

import { User } from '../models/user';

//change to property access (.) instead of property binding([])

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //changed from Object to Portfolio
  portfolio: Portfolio;
  skills: any = [];
  skillNumber;
  portfolioid;
  wordCount: number;
  
  user: User = new User;
  userId: number;
  firstName: string;
  lastName: string;

  //add UserServiceService
  constructor(private portfolioService: PotfolioServiceService,private router: Router, private criteriaService:CriteriaService) { 
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.portfolioid = splitUrl[splitUrl.length -1];
    this.userId = parseInt(localStorage.getItem('token'));
  }

  ngOnInit(): void {
    //console.log(this.portfolioid);
    
    if(this.portfolioid =='portfolio'){
      console.log("Creating portfolio");
      //this.createPortfolio();
    }else{
      console.log("we have an id");
      localStorage.setItem('portId', this.portfolioid);
      this.getPortfolio(this.portfolioid);
      
    }
    //this.portfolioService.setPortfolio(this.portfolio);
  }

  setSkillsMatrix(){
    //console.log('calling ser skills')
    if(this.portfolio != undefined){
      let skillMatrixlength = this.portfolio['skillMatrix'].length;
        for(var i = 0; i < skillMatrixlength; i++ ){
          this.skills.push(i);
        }
        //console.log(this.skills);
    }
  }

  submitPortfolio(){
    if(this.wordCount < this.portfolio['aboutMe'].requirements){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.portfolio['aboutMe'].requirements +' words in the About Me.';
      return;
    }
    if(this.portfolio['education'].items.length < this.portfolio['education'].entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.portfolio['education'].entryAmount +' Education entries.';
      return;
    }
    if(this.portfolio['industryEquivalency'].items.length < this.portfolio['industryEquivalency'].entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.portfolio['industryEquivalency'].entryAmount +' Industry Equivalency entries.';
      return;
    }
    if(this.portfolio['skillMatrix'].items.length < this.portfolio['skillMatrix'].entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.portfolio['skillMatrix'].entryAmount +' Skill Matrix entries.';
      return;
    }
    if(this.portfolio['projects'].items.length < this.portfolio['projects'].entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.portfolio['projects'].entryAmount +' Project entries.';
      return;
    }
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
  }

  //change to createPortfolio(portfolio, id)
  createPortfolio(){
    //this.portfolioService.createPortfolio(this.portfolio, this.portfolioid).subscribe( (data) =>{
      //console.log(data);
     // this.portfolio = data; 
    //})
     //added by StaticRequirement group
    this.criteriaService.getCriteriaByName('projects').subscribe(
      data => {
        let criteria: Criteria = data;
        this.portfolio['projects'].requirements = criteria.requirements;
        this.portfolio['projects'].entryAmount = criteria.entryAmount;
      }
    );
    this.criteriaService.getCriteriaByName('industryEquivalency').subscribe(
      data => {
        let criteria: Criteria = data;
        this.portfolio['industryEquivalency'].requirements = criteria.requirements;
        this.portfolio['industryEquivalency'].entryAmount = criteria.entryAmount;
      }
    ); 
    this.criteriaService.getCriteriaByName('aboutMe').subscribe(
      data => {
        let criteria:Criteria = data;
        this.portfolio['aboutMe'].requirements = criteria.requirements;
        this.portfolio['aboutMe'].entryAmount = criteria.entryAmount;
      }
    );
    this.criteriaService.getCriteriaByName('education').subscribe(
      data => {
        let criteria: Criteria = data;
        this.portfolio['education'].requirements = criteria.requirements;
        this.portfolio['education'].entryAmount = criteria.entryAmount;
      }
    );
    this.criteriaService.getCriteriaByName('skillMatrix').subscribe(
      data => {
        let criteria: Criteria = data;
        this.portfolio['skillMatrix'].requirements = criteria.requirements;
        this.portfolio['skillMatrix'].entryAmount = criteria.entryAmount;
      }
    );    
  }
  // createPortfolio(){
  //   this.portfolioService.createPortfolio(this.portfolio).subscribe( (data) =>{
  //     //console.log(data);
  //     this.portfolio = data;
  //   })
  // }

  getPortfolio(portfolioId){
    this.portfolioService.getPortfolioById(portfolioId).subscribe((data) =>{
      this.portfolio = data;
      console.log(data);
      //possible can delete
      this.portfolioService.getUser(this.userId).subscribe(
        (data2) => {
          this.user = data2;
          console.log(data2);
          this.portfolio['user'] = this.user; //possible breakpoint
          //console.log(this.portfolio);
        });
    })
    this.setSkillsMatrix();
  }
  
  updateEducation(education:any){
    education['id'] = this.portfolio['education']['0']['id']; ///what do?
    this.portfolio['education'].splice(0, 1);
    this.portfolio['education'].push(education);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();  
  }

  updateAboutMe(portfolio: Portfolio){
   // this.portfolio['aboutMe']['description'] = portfolio;
    portfolio = this.portfolio;
    console.log(this.portfolio);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();
  }

  updateIndustryEq(industryEq:any){
    let projectLength = this.portfolio['industryEquivalency'].length;

    //console.log(industryEq);

    this.portfolio['industryEquivalency'].splice(0,projectLength-1);
    this.portfolio['industryEquivalency'] = industryEq;
  
    //console.log('This is the current Portfolio');
    //console.log(this.portfolio);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();
  }
  
  updateProject(projects){
    let projectLength = this.portfolio['projects'].length;
    this.portfolio['projects'].splice(0,projectLength-1);
    this.portfolio['projects'] = projects;
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
    setTimeout(() => this.getPortfolio(this.portfolioid), 500);
    //console.log(projects);
    //console.log(this.portfolio);
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
