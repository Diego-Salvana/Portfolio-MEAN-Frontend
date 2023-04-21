import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
   providedIn: 'root',
})
export class HomeGuard implements CanActivate {
   constructor(private authSvc: AuthService) {}

   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean {
      //verificar jwt
      if (localStorage.getItem('session')) {
         console.log('home guard');
         this.authSvc.setIsLogged(true);
      }

      return true;
   }
}
