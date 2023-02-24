import { Component, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
   private documentScroll = new Subject<number>();
   documentScroll$: Observable<number> = this.documentScroll.asObservable();

   @HostListener('window:scroll', ['$event.target'])
   onViewportScroll(target: HTMLElement): void {
      const documentScroll: number = target.children[0].scrollTop;

      this.documentScroll.next(documentScroll);
   }
}
