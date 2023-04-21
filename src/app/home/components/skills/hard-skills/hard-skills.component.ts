import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-hard-skills',
   templateUrl: './hard-skills.component.html',
   styleUrls: ['./hard-skills.component.css'],
})
export class HardSkillsComponent {
   mouseOver: boolean = false;
   @Input() name: string = '';
   @Input() skillIcon: string = '';
   @Input() colorIcon: string = '';
   @Input() isLogged$!: Observable<boolean>;
   @Output() onEdit: EventEmitter<any> = new EventEmitter();
   @Output() onDelete: EventEmitter<any> = new EventEmitter();

   constructor() {}

   editEmit(): void {
      this.onEdit.emit();
   }

   deleteEmit(): void {
      this.onDelete.emit();
   }
}
