import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

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
   isLogged$: Observable<boolean> = this.authSvc.isLogged$;

   constructor(private authSvc: AuthService) {}

   deleteEmit(): void {
      this.onDelete.emit();
   }
}
