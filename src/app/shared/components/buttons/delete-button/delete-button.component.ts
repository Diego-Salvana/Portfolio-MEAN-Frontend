import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-delete-button',
   templateUrl: './delete-button.component.html',
   styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
   @Input() icon: string = 'pi pi-trash';
   @Input() class: string = 'p-button-raised p-button-danger p-button-text ml-2';
   @Input() tooltip: string = 'Eliminar';
   @Input() showDelay: number = 1000;
   @Input() tooltipPosition: string = 'bottom';
}
