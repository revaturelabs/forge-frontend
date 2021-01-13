import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Router } from '@angular/router';
import { Criteria } from '../models/criteria';
import { CriteriaService } from '../service/criteria.service';
import { User } from '../models/user';
import { AboutMe } from '../models/aboutMe';
import { Education } from '../models/education';
import { Project } from '../models/project';
import { IndustryEquivalency } from '../models/industryEquivalency';
import { SkillMatrix } from '../models/skillMatrix';
//change to property access (.) instead of property binding([])

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //changed from Object to Portfolio
  aboutMe: AboutMe = JSON.parse(localStorage.getItem("aboutMe"));
  education: Education = JSON.parse(localStorage.getItem("education"));
  project: Project = JSON.parse(localStorage.getItem("project"));
  industryEquivalency: IndustryEquivalency = JSON.parse(localStorage.getItem("industryEquivalency"));
  skillMatrix: SkillMatrix = JSON.parse(localStorage.getItem("skillMatrix"));
  wordCount: number = + localStorage.getItem("wordCount");
  bulletCount: number = + localStorage.getItem("bulletCount");
  subSkillCounter: number = + localStorage.getItem("subSkillCounter");
  portfolio: Portfolio;
  skills: any = [];
  skillNumber;
  portfolioid;
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
    let educationCounter, projectCounter, industryEquivalencyCounter, skillMatrixCounter = 0;
    for(var i = 0; i < this.portfolio.portfolioSections.length; i++){
      if(this.portfolio.portfolioSections[0] == "Education" ){
        educationCounter++;
      }
      if(this.portfolio.portfolioSections[0] == "Project" ){
        projectCounter++;
      }
      if(this.portfolio.portfolioSections[0] == "IndustryEquivalency" ){
        industryEquivalencyCounter++;
      }
      if(this.portfolio.portfolioSections[0] == "SkillMatrix" ){
        skillMatrixCounter++;
      }
    }

    console.log(this.wordCount);
    console.log(this.aboutMe.requirements);
    if(this.wordCount < +this.aboutMe.requirements){
      console.log(this.wordCount);
      console.log(this.aboutMe.requirements);
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.aboutMe.requirements +' words in the About Me.';
      return;
    }
    if(educationCounter < +this.education.entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.education.entryAmount +' Education entries.';
      return;
    }
    if(industryEquivalencyCounter < +this.industryEquivalency.entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.industryEquivalency.entryAmount +' Industry Equivalency entries.';
      return;
    }
    if(skillMatrixCounter < +this.skillMatrix.entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.skillMatrix.entryAmount +' Skill Matrix entries.';
      return;
    }
    if(this.subSkillCounter < +this.skillMatrix.requirements){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.skillMatrix.requirements +' sub-skills.';
      return;
    }
    if(projectCounter < +this.project.entryAmount){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.project.entryAmount +' Project entries.';
      return;
    }
    if(this.bulletCount < +this.project.requirements){
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.project.requirements +' bullets inside of Role/Reponsibilities.';
      return;
    }
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();
    this.router.navigateByUrl('/user-home'); 
  }

  //change to createPortfolio(portfolio, id)

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
