import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { Skill } from '../../../shared/interfaces/skill.interface';
import { SkillsService } from '../../../shared/services/skills.service';

@Component({
   selector: 'app-skills',
   templateUrl: './skills.component.html',
   styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
   displayModal: boolean = false;
   skills: Skill[] = [];

   constructor(
      private skillsSvc: SkillsService,
      private confirmationSvc: ConfirmationService
   ) {}

   ngOnInit(): void {
      this.skillsSvc.getAll().subscribe((data) => (this.skills = data));
   }

   showModal(skill: Skill) {
      this.skillsSvc.setSkillEdit(skill);
      this.displayModal = true;
   }

   refreshSkills(skill: Skill): void {
      const { id } = skill;
      this.skills = this.skills.map((el) => {
         if (el.id === id) return skill;
         else return el;
      });
   }

   delete(id: any): void {
      this.confirmationSvc.confirm({
         key: 'deleteAlert',
         message: 'Estás por borrar una habilidad. ¿Deseas continuar?',
         accept: () =>
            this.skillsSvc.delete(id).subscribe({
               next: () => {
                  this.skills = this.skills.filter((el) => el.id !== id);
               },
               error: () => null,
            }),
      });
   }
}
