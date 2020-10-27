import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class AboutMeComponent implements OnInit {
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
  
  aboutMe = [];

  constructor(
    private portfolioService: PotfolioServiceService,
  ) { }

  ngOnInit(): void {
    this.getAboutMeInfo(1);
  }

  getAboutMeInfo(id){
    this.portfolioService.getAboutMeById(id).subscribe( (data) => {
      this.aboutMe = data;
      console.log(this.aboutMe);
    })
  }

  @ViewChild ('test') 
  test:any;

  setText(event){
    //this.aboutMe = event;
    console.log(event.target.textContent);
  }

  save(){
    //let rteValue: string = this.rteObj.value;
    console.log('im saved... nah');
    //console.log(this.aboutMe);
    console.log("test", this.test.nativeElement);
  }

}
