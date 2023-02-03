import { Component, OnInit } from '@angular/core';

import { Skill } from '../../interfaces/skill.interface';
import { SkillsService } from '../../services/skills.service';

@Component({
   selector: 'app-skills',
   templateUrl: './skills.component.html',
   styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
   displayModal: boolean = false;
   skills: Skill[] = [];

   constructor(private skillsSvc: SkillsService) {}

   ngOnInit(): void {
      this.skillsSvc.getSkills().subscribe((data) => {
         this.skills = data;
      });
   }

   delete(id: any): void {
      console.log('Eliminar skill id: ', id);
   }
}
