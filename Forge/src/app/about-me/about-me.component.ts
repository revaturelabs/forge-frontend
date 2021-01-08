import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AboutMe } from '../models/aboutMe';
import { PortfolioItems } from '../models/portfolio-items';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {

  aboutMe: AboutMe;
  portfolioItemId: number;
  id: number;
  description: string;

  @Input() inputAboutMe: []; // decorate the property with @Input()
  @Output() addAboutMe = new EventEmitter<any>();
  
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
  
   

  constructor(private PortfolioService: PotfolioServiceService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    //this grabs portfolio id from router 
    this.portfolioItemId = 1;
    this._route.params.subscribe(params => {
      this.getAboutMe(this.portfolioItemId);
      console.log("in oninit in about me comp "+ this.portfolioItemId);
    });

  }
  ngOnChanges(){
    //this.content = this.inputAboutMe['description'];
  }
 

  save(){
    
     this.PortfolioService.updateAboutMeById(this.portfolioItemId, this.description).subscribe( data => {
      console.log(this.description); //prints new 
      console.log(data); // print old 

     })
    this.addAboutMe.emit(this.description);
    console.log(this.description); //prints new 
  }

  getAboutMe(portfolioItemId: number){
   
    this.PortfolioService.getAboutMeById(portfolioItemId).subscribe( data => {
       console.log(data);
      this.aboutMe = data;
      this.description = data.description;

     })
  }
}
