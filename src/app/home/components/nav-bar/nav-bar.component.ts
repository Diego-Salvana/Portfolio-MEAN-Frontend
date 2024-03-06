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
   hideModal = true;
   private htmlElement = document.querySelector('html');

   constructor(private router: Router, private authSvc: AuthService) {}

   ngOnInit(): void {
      this.subscription = this.isLogged$.subscribe((logged) => {
         this.isLogged = logged;

         logged ? (this.labelBtn = 'Cerrar Sesión') : (this.labelBtn = 'Iniciar Sesión');
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

   showModal(event: MouseEvent): void {
      event.stopPropagation();
      this.hideModal = !this.hideModal;

      this.chekHtmlScroll();
   }

   chekHtmlScroll(): void {
      if (!this.htmlElement) return;

      if (this.hideModal) this.htmlElement.style.overflowY = 'auto';
      else this.htmlElement.style.overflowY = 'hidden';
   }
}
