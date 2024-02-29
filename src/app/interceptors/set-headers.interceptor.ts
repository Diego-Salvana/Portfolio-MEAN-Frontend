import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.method === 'GET') return next.handle(req);

      const token = localStorage.getItem('jwToken');
      const headers = new HttpHeaders({ authorization: `Bearer ${token}` });
      const reqClone = req.clone({ headers });

      return next.handle(reqClone);
   }
}
