import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { MessageToast } from 'src/app/shared/interfaces/messageToast.interface';

export function messageInfo(
   obs: Subject<any>,
   detail: string,
   key?: string,
   summary: string = 'Guardado'
): MessageToast {
   const messageToast: MessageToast = {
      key,
      severity: 'info',
      summary,
      detail,
   };
   obs.next(messageToast);
   return messageToast;
}

export function messageSuccess(obs: Subject<any>, detail: string, key?: string): MessageToast {
   const messageToast: MessageToast = {
      key,
      severity: 'success',
      summary: 'Creado',
      detail,
   };
   obs.next(messageToast);
   return messageToast;
}

export function messageError(
   err: HttpErrorResponse,
   detail: string,
   key?: string,
   obs?: Subject<any>
): MessageToast {
   console.error(err);
   const messageToast: MessageToast = {
      key,
      severity: 'error',
      summary: `Error`,
      detail,
   };

   if (obs) obs.next(messageToast);
   return messageToast;
}
