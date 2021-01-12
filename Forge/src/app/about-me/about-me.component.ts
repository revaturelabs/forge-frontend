import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { FormControl, FormGroup } from "@angular/forms";
import{ CriteriaService } from  '../service/criteria.service';
import { Portfolio } from '../models/portfolio';
import { Criteria } from '../models/criteria';
import { AboutMe } from '../models/aboutMe';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {
  @Input() inputAboutMe: []; // decorate the property with @Input()
  @Output() addAboutMe = new EventEmitter<any>();
  requirements: string; //added this staticRequirement group
  entryAmount: string;  //added this staticRequirement group 
  
  public tools: object = {
    type: 'Expand',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    }; 
  
  criteria: Criteria ;
  requirement: string;
  criteriaName: string;
  aboutMe: AboutMe;
  portfolioId: number;
  id: number;
  description: string; 

  //added by StaticRequirement group
  public wordCount = 0;
  public textareaForm = new FormGroup({
    textinput: new FormControl()
  });
  wordCounter() {
    //this.remainingWords = this.textareaForm.value ? 100 - this.textareaForm.value.textinput.split(/\s+/).length : 100;
    this.wordCount = this.textareaForm.get.length ? 0 + this.textareaForm.value.textinput.split(/\s+/).length
    : 0 ;
    console.log(this.criteria.requirements);
  }

  constructor(private criteriaService: CriteriaService,private PortfolioService: PotfolioServiceService, private _route: ActivatedRoute,
    private _router: Router) { }

  getAboutMeRequirement(){
    this.criteriaService.getCriteriaByName('1').subscribe(criteria=>{
      console.log(criteria.requirements);
      //console.log(this.criteria);
      this.criteria=criteria;
      this.criteria.requirements=criteria.requirements; 
    },error => console.log(error));
    
  }

  ngOnInit(): void {
    this.getAboutMeRequirement();
    //this grabs portfolio id from router 
    //this.PortfolioService.getPortfolioById(this.portfolioId) ;
    this._route.params.subscribe(params => {
    this.getAboutMe(params['id']);
    console.log("in oninit in about me comp "+ params['id']);
    });
  }
  // ngOnChanges(){
  //   this.content = this.inputAboutMe['description'];
  // }

  save(){
    console.log('in about me component save()')
    this.PortfolioService.updateAboutMeById(this.portfolioId, this.aboutMe);
    this.addAboutMe.emit(this.description);
    console.log('this is the description after update method' + this.description);
  }

  getAboutMe(portfolioId: number){
    this.PortfolioService.getAboutMeById(portfolioId).subscribe( data => {
      console.log(data);
     this.aboutMe = data;
     this.description = data.description;

    })
  }
}
