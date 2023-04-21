import { Component, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
   private documentScroll = new Subject<number>();
   isLogged$: Observable<boolean> = this.authSvc.isLogged$;
   availableSpinner: boolean = true;

   get documentScroll$(): Observable<number> {
      return this.documentScroll.asObservable();
   }

   constructor(private authSvc: AuthService) {}

   changeAvailableSpinner(displayModal: boolean): void {
      this.availableSpinner = !displayModal;
   }

   @HostListener('window:scroll', ['$event.target'])
   onViewportScroll(target: HTMLElement): void {
      const documentScroll: number = target.children[0].scrollTop;
      this.documentScroll.next(documentScroll);
   }
}
