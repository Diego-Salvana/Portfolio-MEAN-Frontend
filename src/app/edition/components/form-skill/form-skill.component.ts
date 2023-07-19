import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
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

   constructor(private formBuilder: FormBuilder, private renderer2: Renderer2) {}

   onSaveEmit(): void {
      formHelper.submitForm(this.formSkill, this.onSave);
   }

   isInvalidField(field: string): boolean {
      return formHelper.invalidField(this.formSkill, field);
   }

   onBlurEvent(event: FocusEvent): void {
      const inputElement = event.target;
      this.renderer2.addClass(inputElement, 'ng-dirty');
   }
}
