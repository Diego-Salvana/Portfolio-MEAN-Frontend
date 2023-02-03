import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ProjectsService } from 'src/app/home/services/projects.service';

import { Project } from 'src/app/home/interfaces/project.interface';
import { Router } from '@angular/router';

@Component({
   selector: 'app-project-edit',
   templateUrl: './project-edit.component.html',
   styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent {
   loadingBtn: boolean = false;

   constructor(
      private projectsSvc: ProjectsService,
      private messageSvc: MessageService,
      private router: Router
   ) {}

   save(project: Project): void {
      this.loadingBtn = true;
      this.projectsSvc.save(project).subscribe({
         next: () => {
            this.loadingBtn = false;
            this.router.navigateByUrl('/');
         },
         error: (messageObj) => {
            this.loadingBtn = false;
            this.messageSvc.add(messageObj);
         },
      });
   }
}
