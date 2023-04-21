import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
   constructor(private router: Router, private authSvc: AuthService) {}

   canActivate(): Observable<boolean> | boolean {
      return this.authSvc.verifyToken().pipe(
         tap((isLogged) => {
            if (isLogged) this.router.navigate(['/']);
         }),
         map((isLogged) => !isLogged)
      );
   }

   canLoad(): Observable<boolean> | boolean {
      return this.authSvc.verifyToken().pipe(
         tap((isLogged) => {
            if (isLogged) this.router.navigate(['/']);
         }),
         map((isLogged) => !isLogged)
      );
   }
}
