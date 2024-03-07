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
   @Output() onDelete: EventEmitter<null> = new EventEmitter();
   isLogged$: Observable<boolean> = this.authSvc.isLogged$;

   pruebaString =
      'La aplicación permite buscar información sobre países de todo el mundo. Cuenta con la posibilidad de registrar usuarios y una sección de favoritos. El frontend está creado en Angular utilizando componentes de Angular Material. En tanto el backend fue desarrollado en Typescript con NodeJS, Express y una base de datos MongoDB. Tecnologías: Angular | Angular Material | NodeJS | Express | MongoDB';

   constructor(private authSvc: AuthService) {}

   deleteEmit(): void {
      this.onDelete.emit();
   }

   splitDescription(): ProjectDescription {
      const descriptionArray = this.pruebaString.split('Tecnologías:');

      return { description: descriptionArray[0], technologies: descriptionArray[1] };
   }
}
