import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as serviceHelper from '../../shared/helpers/service.helper';
import { Skill } from '../interfaces/skill.interface';
import { MessageToast } from '../interfaces/messageToast.interface';
import { DeleteResponse } from '../interfaces/deleteResponse.interface';

@Injectable({
   providedIn: 'root',
})
export class SkillsService {
   private baseUrl: string = environment.baseUrl;
   private toastContent = new Subject<MessageToast>();
   toastContent$: Observable<MessageToast> = this.toastContent.asObservable();

   private _skillEdit = new Subject<Skill>();
   skillEdit$: Observable<Skill> = this._skillEdit.asObservable();

   constructor(private http: HttpClient) {}

   setSkillEdit(value: Skill) {
      this._skillEdit.next(value);
   }

   getAll(): Observable<Skill[]> {
      return this.http.get<Skill[]>(`${this.baseUrl}/skills`);
   }

   save(skill: Skill): Observable<Skill> {
      let url: string = `${this.baseUrl}/skills/${skill._id}`;
      return this.http.put<Skill>(url, skill).pipe(
         tap(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Habilidad modificada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>{
            throw serviceHelper.messageError(
               err,
               'No se pudo modificar la habilidad',
               't-1'
            )
         })
      );
   }

   create(skill: Skill): Observable<Skill> {
      let url: string = `${this.baseUrl}/skills`;
      return this.http.post<Skill>(url, skill).pipe(
         tap(() =>
            serviceHelper.messageSuccess(
               this.toastContent,
               'Habilidad agregada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) => {
            const message =
               err.error === 'SKILL_ALREADY_EXISTS'
                  ? 'La habilidad ya existe'
                  : 'No se pudo crear la habilidad';
            throw serviceHelper.messageError(err, message);
         })
      );
   }

   delete(id: string): Observable<DeleteResponse> {
      return this.http
         .delete<DeleteResponse>(`${this.baseUrl}/skills/${id}`)
         .pipe(
            tap(() =>
               serviceHelper.messageInfo(
                  this.toastContent,
                  'Se eliminó la habilidad',
                  't-1',
                  'Borrado'
               )
            ),
            catchError((err: HttpErrorResponse) => {
               throw serviceHelper.messageError(
                  err,
                  'No se pudo eliminar la habilidad',
                  't-1',
                  this.toastContent
               );
            })
         );
   }
}
