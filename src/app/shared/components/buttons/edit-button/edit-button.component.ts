import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-edit-button',
   templateUrl: './edit-button.component.html',
   styleUrls: ['./edit-button.component.css'],
})
export class EditButtonComponent {
   @Input() class: string = 'p-button-raised p-button-info p-button-text bg-dark';
   @Input() icon: string = 'pi pi-pencil';
   @Input() showDelay: number = 800;
   @Input() tooltip: string = 'Editar';
   @Input() tooltipPosition: string = 'bottom';
}
