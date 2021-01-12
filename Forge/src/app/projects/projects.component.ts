import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToolbarService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ToolbarService, HtmlEditorService]
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

  @Input() project: Project;
  @Output() projectChange = new EventEmitter<Project>();

  projects: Project[];

  constructor(
    private portfolioService: PotfolioServiceService
  ) { }

  ngOnInit(): void {
    this.projects = [];
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
}
