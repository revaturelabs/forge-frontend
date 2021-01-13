import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Criteria } from '../models/criteria';
import { CriteriaService } from '../service/criteria.service';
import { User } from '../models/user';
import { AboutMe } from '../models/aboutMe';
import { ActivatedRoute, Params, Router} from '@angular/router';
 
//change to property access (.) instead of property binding([])

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //changed from Object to Portfolio
  aboutMe: AboutMe = JSON.parse(localStorage.getItem("aboutMe"));
  wordCount: number = + localStorage.getItem("wordCount");
  portfolio: Portfolio;
  skills: any = [];
  skillNumber;
  portfolioid;
  
  user: User;
  userId: number;
  firstName: string;
  lastName: string;

  //add UserServiceService
  constructor(private portfolioService: PotfolioServiceService,private _route: ActivatedRoute, private router: Router, private criteriaService:CriteriaService) { 

    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.portfolioid = splitUrl[splitUrl.length -1];
    this.userId = parseInt(localStorage.getItem('token'));
  }

  ngOnInit(): void {
    // this._route.params.subscribe(params => {
    //   //this.getPortfolio(params['id']);
    //   console.log("this is the id from the router thing: " + params['id']);
    // });
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
    console.log(this.wordCount);
    console.log(this.aboutMe.requirements);
    if(this.wordCount < +this.aboutMe.requirements){
      console.log(this.wordCount);
      console.log(this.aboutMe.requirements);
      document.getElementById('message').innerHTML = 'Must have atleast '+  this.aboutMe.requirements +' words in the About Me.';
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
    this.router.navigateByUrl('/user-home'); 
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
  
  updateEducation(education:Education){
    this.portfolio.portfolioSections.push(education);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();
  }

  updateAboutMe(aboutMe: any){
    console.log(this.portfolio);
    this.portfolioService.updateAboutMeById(this.portfolioid, aboutMe).subscribe();
  }

  updateIndustryEq(industryEq:any){
    this.portfolio.portfolioSections.push(industryEq);
    this.portfolioService.updateIndustryEquivalencyById(industryEq);

    //not working
    // this.portfolioService.updatePortfolio(this.portfolio).subscribe();  
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
