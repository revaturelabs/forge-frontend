import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {


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
    this._route.params.subscribe(params => {
      this.getAboutMe(params['id']);
      
    });

  }
  ngOnChanges(){
    //this.content = this.inputAboutMe['description'];
  }
 

  save(){
     this.portfolioItemId=1;
     this.PortfolioService.updateAboutMeById(this.portfolioItemId).subscribe( data => {
     
       console.log(data);
     })
    this.addAboutMe.emit(this.description);
    console.log(this.description);
  }

  getAboutMe(id: number){
    
    this.PortfolioService.getPortfolioById(this.id);
    console.log(this.id);
    // this.port = new Portfolio();
   
   
    this.PortfolioService.getAboutMeById(1).subscribe( data => {
       console.log(data);
      console.log(id);
    //  //this.port = data;
     })
  }
}
