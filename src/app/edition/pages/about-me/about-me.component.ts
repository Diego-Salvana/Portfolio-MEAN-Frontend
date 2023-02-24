import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { AboutMeService } from 'src/app/shared/services/about-me.service';
import { AboutMe } from 'src/app/shared/interfaces/about-me.interface';

@Component({
   selector: 'app-about-me',
   templateUrl: './about-me.component.html',
   styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
   loadingBtn: boolean = false;

   constructor(
      private aboutMeSvc: AboutMeService,
      private router: Router,
      private messageSvc: MessageService
   ) {}

   save(body: AboutMe): void {
      this.loadingBtn = true;

      this.aboutMeSvc.save(body).subscribe({
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
