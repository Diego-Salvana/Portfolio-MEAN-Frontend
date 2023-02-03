import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import * as serviceHelper from '../../shared/helpers/service.helper';
import { AboutMe } from '../interfaces/about-me.interface';
import { MessageToast } from '../interfaces/messageToast.interface';

@Injectable({
   providedIn: 'root',
})
export class AboutMeService {
   private baseUrl: string = environment.baseUrl;

   private toastContent = new Subject<MessageToast>();
   toastContent$: Observable<MessageToast> = this.toastContent.asObservable();

   constructor(private http: HttpClient) {}

   get(): Observable<AboutMe> {
      return this.http.get<AboutMe>(`${this.baseUrl}/about-me`);
   }

   save(body: AboutMe): Observable<MessageToast | null> {
      return this.http.patch<AboutMe>(`${this.baseUrl}/about-me`, body).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Acerca modificado exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(
               err,
               'No se pudo modificar Acerca'
            )
         )
      );
   }
}
