import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-modal-menu',
   templateUrl: './modal-menu.component.html',
   styleUrls: ['./modal-menu.component.css'],
})
export class ModalMenuComponent {
   @Input() isHidden = true;
   @Input() isLogged = false;
   @ViewChild('modalMobile') modalMobile!: ElementRef<HTMLElement>;
   @Output() hideModalEmitter = new EventEmitter();
   @Output() loginEmitter = new EventEmitter();

   constructor(private router: Router) {}

   @HostListener('document:click', ['$event'])
   handler(event: PointerEvent) {
      const menuElement = this.modalMobile.nativeElement;

      if (!menuElement.contains(event.target as Node) && !this.isHidden) {
         this.hideModalEmitter.emit();
      }
   }

   goLogin() {
      this.loginEmitter.emit();
      this.hideModalEmitter.emit();
   }
}
