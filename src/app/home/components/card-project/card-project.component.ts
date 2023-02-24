import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-card-project',
   templateUrl: './card-project.component.html',
   styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
   @Input() typeCard: string = '';
   @Input() classIcon: string = '';
   @Input() editLink: string = '';
   @Input() name: string = '';
   @Input() description: string = '';
   @Input() linkWeb: string = '';
   @Input() linkGitHub: string = '';
   @Input() start: number = 0;
   @Input() end: string = '';
   @Output() onDelete: EventEmitter<null> = new EventEmitter();

   constructor() {}

   deleteEmit(): void {
      this.onDelete.emit();
   }
}
