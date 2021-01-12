import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';
<<<<<<< HEAD
=======
import { AboutMe } from '../models/aboutMe';
>>>>>>> 670246c7a1800b146cb5cbb9558c336f551ee439
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {

  //portfolio: Object;
  port: Portfolio;
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
  
<<<<<<< HEAD
  //aboutMe = [];
  //bug fix team making empty string 
   

=======
    aboutMe: AboutMe;
  portfolioId: number;
  id: number;
  description: string;


>>>>>>> 670246c7a1800b146cb5cbb9558c336f551ee439
  constructor(private PortfolioService: PotfolioServiceService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    
    this._route.params.subscribe(params => {
      this.getAboutMe(params['id']);
    });

<<<<<<< HEAD
  }
  ngOnChanges(){
    //this.content = this.inputAboutMe['description'];
=======
this._route.params.subscribe(params => {
  this.getAboutMe(params['id']);
  console.log("in oninit in about me comp "+ params['id']);
});
>>>>>>> 670246c7a1800b146cb5cbb9558c336f551ee439
  }
 


  save(){
<<<<<<< HEAD
    
    this.PortfolioService.updateAboutMeById(this.port).subscribe( data => {
      this.port = new Portfolio();
      console.log(data);
    })
    //this.addAboutMe.emit(this.content);
    //console.log(this.content);
  }

  getAboutMe(id: number){
    
    this.PortfolioService.getPortfolioById(this.id);
    // //this.id = this.port.id;
    // console.log(this.id);
    this.port = new Portfolio();
    this.PortfolioService.getAboutMeById(id).subscribe( data => {
      console.log(data);
      console.log(id);
     //this.port = data;
=======
    this.aboutMe.description= this.description;
    this.PortfolioService.updateAboutMeById(this.portfolioId, this.aboutMe);
    this.addAboutMe.emit(this.aboutMe);
  }

  getAboutMe(portfolioId: number){
    this.PortfolioService.getAboutMeById(portfolioId).subscribe( data => {
      console.log(data);
     this.aboutMe = data;
     this.description = data.description;

>>>>>>> 670246c7a1800b146cb5cbb9558c336f551ee439
    })
  }
}
