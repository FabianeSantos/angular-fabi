import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url: string = "https://run.mocky.io/v3/48522c3c-5d78-4b1d-a3d2-3a43e83b5e49";

  constructor(private http: HttpClient) { }


  // observable escutador assíncrono
  getProjects():Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.url);
  }

}
