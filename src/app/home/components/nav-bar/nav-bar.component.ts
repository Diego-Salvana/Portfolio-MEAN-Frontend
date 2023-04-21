import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
   selector: 'app-nav-bar',
   templateUrl: './nav-bar.component.html',
   styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
   @Input() isLogged$!: Observable<boolean>;
   labelBtn: string = '';
   isLogged: boolean = false;
   private subscription = new Subscription();

   constructor(private router: Router, private authSvc: AuthService) {}

   ngOnInit(): void {
      this.subscription = this.isLogged$.subscribe((logged) => {
         this.isLogged = logged;

         logged
            ? (this.labelBtn = 'Salir')
            : (this.labelBtn = 'Iniciar Sesión');
      });
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
   }

   goLogin(): void {
      if (!this.isLogged) this.router.navigate(['/auth', 'login']);
      else {
         this.authSvc.setIsLogged(false);
         localStorage.removeItem('jwToken');
      }
   }
}
