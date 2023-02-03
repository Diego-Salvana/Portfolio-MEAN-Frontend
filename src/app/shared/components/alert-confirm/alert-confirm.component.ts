import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-alert-confirm',
   templateUrl: './alert-confirm.component.html',
   styleUrls: ['./alert-confirm.component.css'],
})
export class AlertConfirmComponent {
   @Input() key: string = '';
}
