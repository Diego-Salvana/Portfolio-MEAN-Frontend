import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';

import { MessageToast } from 'src/app/shared/interfaces/messageToast.interface';

export function messageInfo(
   obs: Subject<any>,
   detail: string,
   key?: string,
   summary: string = 'Guardado'
): null {
   const messageToast: MessageToast = {
      key,
      severity: 'info',
      summary,
      detail,
   };
   obs.next(messageToast);
   return null;
}

export function messageSuccess(
   obs: Subject<any>,
   detail: string,
   key?: string
): null {
   let messageObj: MessageToast = {
      key,
      severity: 'success',
      summary: 'Creado',
      detail,
   };
   obs.next(messageObj);
   return null;
}

export function messageError(
   err: HttpErrorResponse,
   detail: string,
   key?: string,
   obs?: Subject<any>
): Observable<never> {
   console.warn(err);
   const messageToast: MessageToast = {
      key,
      severity: 'error',
      summary: `Error ${err.status || ''}`,
      detail,
   };
   if (obs) obs.next(messageToast);

   return throwError(() => messageToast);
}
