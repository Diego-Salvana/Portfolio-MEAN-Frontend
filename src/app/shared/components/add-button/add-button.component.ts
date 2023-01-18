import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-add-button',
   templateUrl: './add-button.component.html',
   styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent {
   @Input() icon: string = 'pi pi-plus';
   @Input() class: string = 'p-button-raised p-button-success p-button-text p-button-lg';
   @Input() tooltip: string = 'Agregar';
   @Input() showDelay: number = 1000;
   @Input() tooltipPosition: string = 'bottom';
}
