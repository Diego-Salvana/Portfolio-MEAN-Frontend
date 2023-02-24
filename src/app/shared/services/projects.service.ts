import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

import * as serviceHelper from '../helpers/service.helper';
import { Project } from '../interfaces/project.interface';
import { MessageToast } from '../interfaces/messageToast.interface';

@Injectable({
   providedIn: 'root',
})
export class ProjectsService {
   private baseUrl: string = environment.baseUrl;

   private toastContent = new Subject<MessageToast>();
   toastContent$: Observable<MessageToast> = this.toastContent.asObservable();

   constructor(private http: HttpClient) {}

   getAll(): Observable<Project[]> {
      return this.http.get<Project[]>(`${this.baseUrl}/projects`);
   }

   getById(id: any): Observable<Project> {
      return this.http.get<Project>(`${this.baseUrl}/projects/${id}`);
   }

   save(project: Project): Observable<null> {
      let url: string = `${this.baseUrl}/projects/${project.id}`;
      return this.http.put<Project>(url, project).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Proyecto modificado exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(err, 'No se pudo modificar el proyecto')
         )
      );
   }

   create(project: Project): Observable<null> {
      let url: string = `${this.baseUrl}/projects`;
      return this.http.post<Project>(url, project).pipe(
         map(() =>
            serviceHelper.messageSuccess(
               this.toastContent,
               'Proyecto agregado exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(err, 'No se pudo crear el proyecto')
         )
      );
   }

   delete(id: any): Observable<null> {
      return this.http.delete(`${this.baseUrl}/projects/${id}`).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Se eliminó el proyecto',
               't-1',
               'Borrado'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(
               err,
               'No se pudo eliminar el proyecto',
               't-1',
               this.toastContent
            )
         )
      );
   }
}
