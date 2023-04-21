import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ProjectsService } from 'src/app/shared/services/projects.service';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
   selector: 'app-project-create',
   templateUrl: './project-create.component.html',
   styleUrls: ['./project-create.component.css'],
})
export class ProjectCreateComponent {
   loadingBtn: boolean = false;

   constructor(
      private projectsSvc: ProjectsService,
      private messageSvc: MessageService,
      private router: Router
   ) {}

   create(project: Project): void {
      this.loadingBtn = true;
      this.projectsSvc.create(project).subscribe({
         next: () => {
            this.loadingBtn = false;
            this.router.navigateByUrl('/');
         },
         error: (messageObj) => {
            console.log(messageObj)
            this.loadingBtn = false;
            this.messageSvc.add(messageObj);
         },
      });
   }
}
