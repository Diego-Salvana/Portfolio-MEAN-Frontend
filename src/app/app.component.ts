import { AfterViewInit, Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { AboutMeService } from './shared/services/about-me.service';
import { ProjectsService } from './shared/services/projects.service';
import { SkillsService } from './shared/services/skills.service';
import { AuthService } from './auth/services/auth.service';

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
      private skillsSvc: SkillsService,
      private authSvc: AuthService
   ) {}

   ngOnInit() {
      this.primengConfig.ripple = true;

      this.authSvc.verifyToken().subscribe();
   }

   ngAfterViewInit(): void {
      this.projectsSvc.toastContent$.subscribe((messageToast) => this.messageSvc.add(messageToast));
      this.aboutMeSvc.toastContent$.subscribe((messageToast) => this.messageSvc.add(messageToast));
      this.skillsSvc.toastContent$.subscribe((messageToast) => this.messageSvc.add(messageToast));
   }
}
