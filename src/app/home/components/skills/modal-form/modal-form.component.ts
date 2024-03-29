import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { MessageService } from 'primeng/api';

import * as formHelper from '../../../../shared/helpers/form.helper';
import { SkillsService } from 'src/app/shared/services/skills.service';
import { Skill } from 'src/app/shared/interfaces/skill.interface';

@Component({
   selector: 'app-modal-form',
   templateUrl: './modal-form.component.html',
   styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit, OnDestroy {
   @Input() displayModal: boolean = false;
   @Output() hideModal: EventEmitter<any> = new EventEmitter();
   @Output() editSkill: EventEmitter<Skill> = new EventEmitter();
   private subscription = new Subscription();
   loadingBtn: boolean = false;
   icon: string = "<i class='pi pi-minus'></i>";
   formSkill: FormGroup = this.formBuilder.group({
      _id: null,
      name: ['', Validators.required],
      iconHTML: ['', Validators.required],
      color: ['', Validators.required],
   });
   svgContent!: SafeHtml;

   constructor(
      private formBuilder: FormBuilder,
      private skillsSvc: SkillsService,
      private messageSvc: MessageService,
      private sanitizer: DomSanitizer
   ) {}

   ngOnInit(): void {
      this.subscription = this.skillsSvc.skillEdit$.subscribe((data) => {
         this.formSkill.reset(data);
      });

      this.formSkill.valueChanges.subscribe(({ iconHTML }) => {
         this.svgContent = this.sanitizer.bypassSecurityTrustHtml(iconHTML);
      });
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
   }

   hide() {
      this.hideModal.emit();
      this.formSkill.reset();
   }

   invalidField(field: string): boolean {
      return formHelper.invalidField(this.formSkill, field);
   }

   submit(): void {
      if (this.formSkill.invalid) {
         formHelper.markAllAsDirty(this.formSkill);
         return;
      }

      this.loadingBtn = true;
      const skill: Skill = this.formSkill.value;
      this.skillsSvc.save(skill).subscribe({
         next: () => {
            this.editSkill.emit(skill);
            this.loadingBtn = false;
            this.hide();
         },
         error: (messageObj) => {
            this.loadingBtn = false;
            this.messageSvc.add(messageObj);
         },
      });
   }
}
