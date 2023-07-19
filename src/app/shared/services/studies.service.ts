import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as serviceHelper from '../helpers/service.helper';
import { Study } from '../interfaces/study.interface';
import { MessageToast } from '../interfaces/messageToast.interface';
import { DeleteResponse } from '../interfaces/deleteResponse.interface';

@Injectable({
   providedIn: 'root',
})
export class StudiesService {
   private baseUrl: string = environment.baseUrl;

   private toastContent = new Subject<MessageToast>();
   toastContent$: Observable<MessageToast> = this.toastContent.asObservable();

   constructor(private http: HttpClient) {}

   getAll(): Observable<Study[]> {
      return this.http
         .get<Study[]>(`${this.baseUrl}/studies`)
         .pipe(tap((data) => data.sort(this.orderStudies)));
   }

   getById(id: string): Observable<Study> {
      return this.http.get<Study>(`${this.baseUrl}/studies/${id}`);
   }

   save(study: Study): Observable<Study> {
      let url: string = `${this.baseUrl}/studies/${study._id}`;
      return this.http.put<Study>(url, study).pipe(
         tap(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Educación modificada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) => {
            throw serviceHelper.messageError(
               err,
               'No se pudo modificar educación'
            );
         })
      );
   }

   create(Study: Study): Observable<Study> {
      let url: string = `${this.baseUrl}/studies`;
      return this.http.post<Study>(url, Study).pipe(
         tap(() =>
            serviceHelper.messageSuccess(
               this.toastContent,
               'Estudio agregado exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) => {
            throw serviceHelper.messageError(
               err,
               'No se pudo crear el item estudio'
            );
         })
      );
   }

   delete(id: string): Observable<DeleteResponse> {
      return this.http
         .delete<DeleteResponse>(`${this.baseUrl}/studies/${id}`)
         .pipe(
            tap(() =>
               serviceHelper.messageInfo(
                  this.toastContent,
                  'Se eliminó el estudio',
                  't-1',
                  'Borrado'
               )
            ),
            catchError((err: HttpErrorResponse) => {
               throw serviceHelper.messageError(
                  err,
                  'No se pudo eliminar el estudio',
                  't-1',
                  this.toastContent
               );
            })
         );
   }

   orderStudies(a: Study, b: Study): number {
      const a_End = Number(a.end);
      const b_End = Number(b.end);

      if (a.end && b.end) {
         if (`${a_End}` !== 'NaN' && `${b_End}` !== 'NaN') {
            if (a_End > b_End) return -1;
            else if (a_End < b_End) return 1;
            else if (a.start > b.start) return -1;
            else if (a.start < b.start) return 1;
            else return 0;
         } else if (`${a_End}` !== 'NaN' && `${b_End}` === 'NaN') {
            return -1;
         } else if (`${a_End}` === 'NaN' && `${b_End}` !== 'NaN') {
            return 1;
         } else {
            if (a.start > b.start) return -1;
            else if (a.start < b.start) return 1;
            else return 0;
         }
      } else if (a.end && !b.end) {
         if (`${a_End}` === 'NaN') return 1;
         else {
            if (a_End > b.start) return -1;
            else return 1;
         }
      } else if (!a.end && b.end) {
         if (`${b_End}` === 'NaN') return -1;
         else {
            if (a.start >= b_End) return -1;
            else return 1;
         }
      } else {
         if (a.start > b.start) return -1;
         else if (a.start < b.start) return 1;
         else return 0;
      }
   }
}
