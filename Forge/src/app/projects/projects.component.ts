import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToolbarService, HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ToolbarService, HtmlEditorService]
})
export class ProjectsComponent implements OnInit {
  bullets: number[]= [];
  bulletComponents: number[] = [];
  public bulletNumber: number = 0;
  public bulletCount: number = 0;

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
  submitted: boolean = false;

  @Input() inputProject: []; 
  @Output() updateProject = new EventEmitter<any>();
  @Input() inputBullet: []; 
  @Output() updateBullet = new EventEmitter<any>();

  projectComponents = [];
  projectNumber=0;

  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();

  projects: Project[];

  constructor(private portfolioService: PotfolioServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.projects = [];
    this.setBulletComponent();
  }

  setProjectId() {

  }

  addProject() {
    this.project = new Project;
    // this.project.id = this.projectNumber;
    this.project.name = "Enter Project Name";
    this.project.description = "Enter Project Description";
    this.project.projectResponsibilities = "Enter Project Responsibilities";
    this.project.projectTechnologies = "Enter Project Technologies";
    this.projects.push(this.project);
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
  }

  save() {
    this.portfolioService.updateProjectById(this.project);
  }
  
  setBulletComponent(){
    if(this.inputBullet.length != 0){
      for(var i = 0;i < this.inputBullet.length;i++ ){
         this.bulletComponents.push(
         );
        this.bulletNumber++;
        this.bullets.push(this.bulletNumber);
      }
    }
  }
  addBullet(){
    this.bulletNumber++;
    this.bullets.push(this.bulletNumber);
    this.bulletComponents.push(
    );
    this.bulletCount = this.bulletNumber; //<-- Bullet number for Aris
    console.log(this.bulletCount);
  }

   deleteBullet(index){
    this.bullets.splice(index,1);
    this.bulletComponents.splice(index,1);
    if(this.bulletNumber > 0){
      this.bulletNumber--;
    }
    
  }
  
  allBullets(){
        this.addBullet();
      
  }

}
