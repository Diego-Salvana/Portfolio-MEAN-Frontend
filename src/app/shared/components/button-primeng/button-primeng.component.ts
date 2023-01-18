import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-button-primeng',
   templateUrl: './button-primeng.component.html',
   styleUrls: ['./button-primeng.component.css'],
})
export class ButtonPrimengComponent {
   @Input() type: string = 'button';
   @Input() label: string = '';
   @Input() icon: string = '';
   @Input() class: string = '';
}
