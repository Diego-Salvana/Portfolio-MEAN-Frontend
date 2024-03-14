import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

import { Skill } from '../../../shared/interfaces/skill.interface';
import { SkillsService } from '../../../shared/services/skills.service';
import { skillsMock } from 'src/app/shared/helpers/skillsMock';

@Component({
   selector: 'app-skills',
   templateUrl: './skills.component.html',
   styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
   displayModal: boolean = false;
   skills: Skill[] = [];
   @Input() isLogged$!: Observable<boolean>;
   @Output() modalEmit: EventEmitter<boolean> = new EventEmitter();

   skillsM: Skill[] = skillsMock;

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
      this.modalEmit.emit(this.displayModal);
   }

   hideModal() {
      this.displayModal = false;
      this.modalEmit.emit(this.displayModal);
   }

   refreshSkills(skill: Skill): void {
      const { _id } = skill;
      this.skills = this.skills.map((el) => {
         if (el._id === _id) return skill;
         else return el;
      });
   }

   delete(id: string): void {
      this.confirmationSvc.confirm({
         key: 'deleteAlert',
         message: 'Estás por borrar una habilidad. ¿Deseas continuar?',
         accept: () =>
            this.skillsSvc.delete(id).subscribe({
               next: () => {
                  this.skills = this.skills.filter((el) => el._id !== id);
               },
               error: () => null,
            }),
      });
   }
}
