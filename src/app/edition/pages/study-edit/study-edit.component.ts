import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { StudiesService } from 'src/app/home/services/studies.service';
import { Study } from 'src/app/home/interfaces/study.interface';

@Component({
   selector: 'app-study-edit',
   templateUrl: './study-edit.component.html',
   styleUrls: ['./study-edit.component.css'],
})
export class StudyEditComponent {
   loadingBtn: boolean = false;

   constructor(
      private studiesSvc: StudiesService,
      private messageSvc: MessageService,
      private router: Router
   ) {}

   save(study: Study): void {
      this.loadingBtn = true;
      this.studiesSvc.save(study).subscribe({
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
