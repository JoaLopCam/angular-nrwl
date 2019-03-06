import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log('SELECTED PROJECT', this.selectedProject);
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };

    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    console.log('save project', project);
  }

  deleteProject(project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
