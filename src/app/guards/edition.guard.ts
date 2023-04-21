import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
   providedIn: 'root',
})
export class EditionGuard implements CanLoad, CanActivate {
   constructor(private router: Router, private authSvc: AuthService) {}

   canActivate(): Observable<boolean> | boolean {
      return this.authSvc.verifyToken().pipe(
         tap((resp) => {
            if (!resp) this.router.navigate(['/']);
         })
      );
   }

   canLoad(): Observable<boolean> | boolean {
      return this.authSvc.verifyToken().pipe(
         tap((resp) => {
            if (!resp) this.router.navigate(['/']);
         })
      );
   }
}
