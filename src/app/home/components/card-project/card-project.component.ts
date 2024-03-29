import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { ProjectDescription } from 'src/app/shared/interfaces/projectDescription.interface';

@Component({
   selector: 'app-card-project',
   templateUrl: './card-project.component.html',
   styleUrls: ['./card-project.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent {
   @Input() editLink: string = '';
   @Input() name: string = '';
   @Input() description: string = '';
   @Input() linkWeb: string = '';
   @Input() linkGitHub: string = '';
   @Input() imgRoute: string = '';
   @Output() onDelete: EventEmitter<null> = new EventEmitter();
   isLogged$: Observable<boolean> = this.authSvc.isLogged$;

   constructor(private authSvc: AuthService) {}

   deleteEmit(): void {
      this.onDelete.emit();
   }

   splitDescription(): ProjectDescription {
      const descriptionArray = this.description.split('Tecnologías:');

      return { description: descriptionArray[0], technologies: descriptionArray[1] };
   }
}
