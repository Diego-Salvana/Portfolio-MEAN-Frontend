import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SpinnerService } from '../../services/spinner.service';

@Component({
   selector: 'app-spinner',
   template: `
      <div *ngIf="(isLoading$ | async) && availableSpinner" class="spinner-container">
         <p-progressSpinner></p-progressSpinner>
      </div>
   `,
   styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
   isLoading$: Observable<boolean> = this.spinnerSvc.isLoading$;
   @Input() availableSpinner: boolean = true;

   constructor(private spinnerSvc: SpinnerService) {}
}
