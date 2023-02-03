import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-form-skill',
   templateUrl: './form-skill.component.html',
   styleUrls: ['./form-skill.component.css'],
})
export class FormSkillComponent {
   @Input() title: string = '';
   @Input() btnLabel: string = '';
   icon: string = "<i class='pi pi-minus'></i>";

   formSkill: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['', Validators.required],
   });

   constructor(private formBuilder: FormBuilder) {}

}
