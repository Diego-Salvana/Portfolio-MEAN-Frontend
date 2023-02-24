import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { SkillsService } from 'src/app/shared/services/skills.service';
import { Skill } from 'src/app/shared/interfaces/skill.interface';

@Component({
   selector: 'app-skill-create',
   templateUrl: './skill-create.component.html',
   styleUrls: ['./skill-create.component.css'],
})
export class SkillCreateComponent {
   loadingBtn: boolean = false;

   constructor(
      private skillsSvc: SkillsService,
      private messageSvc: MessageService,
      private router: Router
   ) {}

   create(skill: Skill): void {
      this.loadingBtn = true;
      this.skillsSvc.create(skill).subscribe({
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
