import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as serviceHelper from '../../shared/helpers/service.helper';
import { Skill } from '../interfaces/skill.interface';
import { MessageToast } from '../interfaces/messageToast.interface';

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

   save(skill: Skill): Observable<null> {
      let url: string = `${this.baseUrl}/skills/${skill.id}`;
      return this.http.put<Skill>(url, skill).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Habilidad modificada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(
               err,
               'No se pudo modificar la habilidad',
               't-1'
            )
         )
      );
   }

   create(skill: Skill): Observable<null> {
      let url: string = `${this.baseUrl}/skills`;
      return this.http.post<Skill>(url, skill).pipe(
         map(() =>
            serviceHelper.messageSuccess(
               this.toastContent,
               'Habilidad agregada exitosamente',
               't-1'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(err, 'No se pudo crear la habilidad')
         )
      );
   }

   delete(id: any): Observable<null> {
      return this.http.delete(`${this.baseUrl}/skills/${id}`).pipe(
         map(() =>
            serviceHelper.messageInfo(
               this.toastContent,
               'Se eliminó la habilidad',
               't-1',
               'Borrado'
            )
         ),
         catchError((err: HttpErrorResponse) =>
            serviceHelper.messageError(
               err,
               'No se pudo eliminar la habilidad',
               't-1',
               this.toastContent
            )
         )
      );
   }
}
