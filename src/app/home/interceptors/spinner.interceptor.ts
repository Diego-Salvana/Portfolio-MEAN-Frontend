import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
   constructor(private spinnerSvc: SpinnerService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const isSpinner = req.headers.get('spinner');

      if (isSpinner === 'on') {
         this.spinnerSvc.show();
         return next.handle(req);
      }

      this.spinnerSvc.show();
      return next.handle(req).pipe(finalize(() => this.spinnerSvc.hidden()));
   }
}

