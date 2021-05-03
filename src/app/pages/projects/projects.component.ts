import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

projectList: ProjectModel[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    console.log(this.projectList);
    this.projectsService.getProjects().subscribe(response =>{
      console.log(response);
      this.projectList = response;
      
    })
    
  }

}
