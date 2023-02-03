import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { StudiesService } from 'src/app/home/services/studies.service';
import { Study } from 'src/app/home/interfaces/study.interface';

@Component({
   selector: 'app-study-create',
   templateUrl: './study-create.component.html',
   styleUrls: ['./study-create.component.css'],
})
export class StudyCreateComponent {
   loadingBtn: boolean = false;

   constructor(
      private studiesSvc: StudiesService,
      private messageSvc: MessageService,
      private router: Router
   ) {}

   create(study: Study) {
      this.loadingBtn = true;
      this.studiesSvc.create(study).subscribe({
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
