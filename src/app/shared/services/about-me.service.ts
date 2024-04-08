import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import * as serviceHelper from '../helpers/service.helper';
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

   save({ _id, aboutMeText }: AboutMe): Observable<AboutMe> {
      return this.http.put<AboutMe>(`${this.baseUrl}/about-me/${_id}`, { aboutMeText }).pipe(
         tap(() => {
            serviceHelper.messageInfo(this.toastContent, 'Acerca modificado exitosamente.', 't-1');
         }),
         catchError((err: HttpErrorResponse) => {
            throw serviceHelper.messageError(err, 'No se pudo modificar la información.');
         })
      );
   }
}
