import {
   AfterViewInit,
   Component,
   ElementRef,
   Input,
   OnInit,
   Renderer2,
   ViewChild,
} from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

import { StudiesService } from '../../../shared/services/studies.service';
import { Study } from '../../../shared/interfaces/study.interface';

@Component({
   selector: 'app-studies',
   templateUrl: './studies.component.html',
   styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit, AfterViewInit {
   studies: Study[] = [];
   @Input() documentScroll$!: Observable<number>;
   @Input() isLogged$!: Observable<boolean>;
   @ViewChild('stdSection') stdSection!: ElementRef<HTMLElement>;
   @ViewChild('studiesContainer') studiesContainer!: ElementRef<HTMLElement>;
   private subscription = new Subscription();

   constructor(
      private studiesSvc: StudiesService,
      private confirmationSvc: ConfirmationService,
      private renderer2: Renderer2
   ) {}

   ngOnInit(): void {
      this.studiesSvc.getAll().subscribe((data) => (this.studies = data));
   }

   ngAfterViewInit(): void {
      const studiesElement = this.studiesContainer.nativeElement;

      this.subscription = this.documentScroll$.subscribe((scroll) => {
         const stdSectionOffsetTop = this.stdSection.nativeElement.offsetTop;
         if (scroll > stdSectionOffsetTop - 500) {
            this.renderer2.addClass(studiesElement, 'animate');
            this.subscription.unsubscribe();
         }
      });
   }

   delete(id: string): void {
      this.confirmationSvc.confirm({
         key: 'deleteAlert',
         message: 'Estás por borrar un estudio. ¿Deseas continuar?',
         accept: () =>
            this.studiesSvc.delete(id).subscribe({
               next: () =>
                  (this.studies = this.studies.filter((el) => el._id !== id)),
               error: () => null,
            }),
      });
   }
}
