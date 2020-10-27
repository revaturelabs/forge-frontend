import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToolbarService, HtmlEditorService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';

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

  value: string = "";
  
  form: FormGroup;

  submitted = false;  
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
   
  }

  //@ViewChild ('aboutMe', {static:false}) aboutMe:any;
  //aboutMe;


  // setText(event){
  //   this.aboutMe = event;
  //   console.log(event.target.textContent);
  // }

  @ViewChild('typeRTE') rteObj: RichTextEditorComponent;
  @ViewChild('valueTemplate') valueTemp: any;

  save(){
    let rteValue: string = this.rteObj.value;
    console.log('im saved... nah');
    console.log(rteValue);
  }

}
