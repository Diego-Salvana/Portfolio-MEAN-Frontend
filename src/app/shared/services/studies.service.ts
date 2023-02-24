import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import * as serviceHelper from '../helpers/service.helper';
import { Study } from '../interfaces/study.interface';
import { MessageToast } from '../interfaces/messageToast.interface';

@Injectable({
   providedIn: 'root',
})
export class StudiesService {
   private baseUrl: string = environment.baseUrl;

   private toastContent = new Subject<MessageToast>();
   toastContent$: Observable<MessageToast> = this.toastContent.asObservable();

   constructor(private http: HttpClient) {}

   getAll(): Observable<Study[]> {
      return this.http.get<Study[]>(`${this.baseUrl}/studies`).pipe(
         tap((data) => {
            data.sort((a, b) => {
               if (a.start > b.start) return -1;
               else if (a.start < b.start) return 1;
               else if (a.end && b.end) return a.end > b.end ? -1 : 1;
               else if (a.end && !b.end) return -1;
               return 0;
            });
         })
      );
   }

   getById(id: any): Observable<Study> {
      return this.http.get<Study>(`${this.baseUrl}/studies/${id}`);
   }

   save(study: Study): Observable<null> {
      let url: string = `${this.baseUrl}/studies/${study.id}`;
      return this.http.put<Study>(url, study).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Educación modificada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(err, 'No se pudo modificar educación')
         )
      );
   }

   create(Study: Study): Observable<MessageToast | null> {
      let url: string = `${this.baseUrl}/studies`;
      return this.http.post<Study>(url, Study).pipe(
         map(() =>
            serviceHelper.messageSuccess(
               this.toastContent,
               'Estudio agregado exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(err, 'No se pudo crear el item estudio')
         )
      );
   }

   delete(id: any): Observable<null> {
      return this.http.delete(`${this.baseUrl}/studies/${id}`).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Se eliminó el estudio',
               't-1',
               'Borrado'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(
               err,
               'No se pudo eliminar el estudio',
               't-1',
               this.toastContent
            )
         )
      );
   }
}
