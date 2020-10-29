import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolbarService, HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ToolbarService,HtmlEditorService]
})
export class ProjectsComponent implements OnInit {
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
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setProjectComponent();
  }

  @Input() inputProject: []; 
  @Output() updateProject = new EventEmitter<any>();
  
  projects = [];
  projectComponents = [];
  projectNumber=0;

  setProjectId(){

  }

  setProjectComponent(){
    if(this.inputProject.length != 0){
      for(var i = 0;i < this.inputProject.length;i++ ){
        this.projectComponents.push(
          {
            "id": this.inputProject[i]['id'],
            "name":this.inputProject[i]['name'],
            "responsibilities":this.inputProject[i]['projectResponsibilities'][0]['content'],
            "technologies":this.inputProject[i]['projectTechnologies'][0]['name']
          }
        );
        this.projectNumber ++;
        this.projects.push(this.projectNumber);
      }
    }
    //console.log(this.projectComponents);
    //console.log(this.projectNumber);
    //console.log(this.inputProject)
  }

  addProject(){
    this.projectNumber++;
    this.projects.push(this.projectNumber);
    this.projectComponents.push(
      {
        "name":"Enter Project Name",
        "responsibilities":"Enter Project Responsibilities",
        "technologies":"Enter Project Technologies"
      }
    );
    this.updateProject.emit(this.projectComponents);
    //console.log("THIS IS WHAT I NEED" , this.inputProject);
    // console.log(this.projectNumber);
    // console.log(this.projects);
    //console.log(this.projectComponents);
  }

  deleteProject(index){
    //console.log(index);
    this.projects.splice(index,1);
    this.projectComponents.splice(index,1);
    //console.log(this.projectNumber);
    //console.log(this.projects);
  }
  
  onSubmit(){
    this.submitted = true;
  }

  save(){
    //console.log( this.projectComponents);
    // console.log(this.inputProject);
    this.updateProject.emit(this.projectComponents);
  }

  getData(){
    //console.log(this.projectComponents);
    return this.projectComponents;
  }
}
