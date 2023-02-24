import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as formHelper from '../../../shared/helpers/form.helper';
import { Skill } from 'src/app/shared/interfaces/skill.interface';

@Component({
   selector: 'app-form-skill',
   templateUrl: './form-skill.component.html',
   styleUrls: ['./form-skill.component.css'],
})
export class FormSkillComponent {
   @Input() btnLabel: string = '';
   @Input() loadingBtn: boolean = false;
   @Output() onSave: EventEmitter<Skill> = new EventEmitter();
   icon: string = "<i class='pi pi-minus'></i>";

   formSkill: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      iconHTML: ['', Validators.required],
      color: ['', Validators.required],
   });

   constructor(private formBuilder: FormBuilder) {}

   onSaveEmit(): void {
      formHelper.submitForm(this.formSkill, this.onSave);
   }

   invalidField(field: string): boolean {
      return formHelper.invalidField(this.formSkill, field);
   }
}
