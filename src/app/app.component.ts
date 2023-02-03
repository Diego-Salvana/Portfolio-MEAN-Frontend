import { AfterViewInit, Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { AboutMeService } from './home/services/about-me.service';
import { ProjectsService } from './home/services/projects.service';
import { StudiesService } from './home/services/studies.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
   constructor(
      private primengConfig: PrimeNGConfig,
      private projectsSvc: ProjectsService,
      private messageSvc: MessageService,
      private aboutMeSvc: AboutMeService,
      private studiesSvc: StudiesService
   ) {}

   ngOnInit() {
      this.primengConfig.ripple = true;
   }

   ngAfterViewInit(): void {
      this.projectsSvc.toastContent$.subscribe((messageToast) =>
         this.messageSvc.add(messageToast)
      );

      this.aboutMeSvc.toastContent$.subscribe((messageToast) =>
         this.messageSvc.add(messageToast)
      );

      this.studiesSvc.toastContent$.subscribe((messageToast) =>
         this.messageSvc.add(messageToast)
      );
   }
}
