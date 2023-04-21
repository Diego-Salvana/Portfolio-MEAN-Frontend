import {
   AfterViewInit,
   Component,
   ElementRef,
   Input,
   OnInit,
   QueryList,
   Renderer2,
   ViewChild,
   ViewChildren,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

import { ProjectsService } from '../../../shared/services/projects.service';
import { Project } from '../../../shared/interfaces/project.interface';

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
   projects: Project[] = [];
   @Input() documentScroll$!: Observable<number>;
   @Input() isLogged$!: Observable<boolean>;
   @ViewChild('projectSection') projectSection!: ElementRef<HTMLElement>;
   @ViewChildren('projectCard') projectCard!: QueryList<
      ElementRef<HTMLElement>
   >;
   private subscription = new Subscription();

   constructor(
      private projectsSvc: ProjectsService,
      private confirmationSvc: ConfirmationService,
      private renderer2: Renderer2
   ) {}

   ngOnInit(): void {
      this.projectsSvc.getAll().subscribe((data) => (this.projects = data));
   }

   ngAfterViewInit(): void {
      this.subscription = this.documentScroll$.subscribe((scroll) => {
         const projectsOffsetTop = this.projectSection.nativeElement.offsetTop;
         const initAnimate: number = projectsOffsetTop - 750;

         if (scroll <= initAnimate) return;

         this.projectCard.forEach(({ nativeElement }) => {
            if (scroll > initAnimate + nativeElement.offsetTop) {
               this.renderer2.addClass(nativeElement, 'animate');
               const lastHasAnimate: boolean =
                  this.projectCard.last.nativeElement.classList.contains(
                     'animate'
                  );
               if (lastHasAnimate) this.subscription.unsubscribe();
            }
         });
      });
   }

   delete(id: string): void {
      this.confirmationSvc.confirm({
         key: 'deleteAlert',
         message: 'Estás por borrar un proyecto. ¿Deseas continuar?',
         accept: () =>
            this.projectsSvc.delete(id).subscribe({
               next: () =>
                  (this.projects = this.projects.filter((el) => el._id !== id)),
               error: () => null,
            }),
      });
   }
}
