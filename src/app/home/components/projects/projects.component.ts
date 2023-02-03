import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
   projects: Project[] = [];

   constructor(
      private projectsSvc: ProjectsService,
      private confirmationSvc: ConfirmationService
   ) {}

   ngOnInit(): void {
      this.projectsSvc.getAll().subscribe((data) => (this.projects = data));
   }

   delete(id: any): void {
      this.confirmationSvc.confirm({
         key: 'projectAlert',
         message: 'Estás por borrar un proyecto. ¿Deseas continuar?',
         accept: () =>
            this.projectsSvc.delete(id).subscribe({
               next: () => {
                  this.projects = this.projects.filter((el) => el.id !== id);
               },
               error: () => null,
            }),
      });
   }
}
