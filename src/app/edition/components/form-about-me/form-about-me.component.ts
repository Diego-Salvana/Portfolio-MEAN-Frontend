import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AboutMeService } from 'src/app/shared/services/about-me.service';
import { AboutMe } from 'src/app/shared/interfaces/about-me.interface';
import * as formHelper from '../../../shared/helpers/form.helper';

@Component({
   selector: 'app-form-about-me',
   templateUrl: './form-about-me.component.html',
   styleUrls: ['./form-about-me.component.css'],
})
export class FormAboutMeComponent implements OnInit {
   @Output() onSave: EventEmitter<AboutMe> = new EventEmitter();
   @Input() loadingBtn: boolean = false;

   formAboutMe: FormGroup = new FormGroup({
      aboutMeText: new FormControl('', [Validators.required]),
   });

   constructor(private aboutMeSvc: AboutMeService) {}

   ngOnInit(): void {
      this.aboutMeSvc.get().subscribe(({ aboutMeText }) => {
         this.formAboutMe.setValue({ aboutMeText });
      });
   }

   onSaveEmit(): void {
      formHelper.submitForm(this.formAboutMe, this.onSave);
   }

   invalidField(field: string): boolean {
      return formHelper.invalidField(this.formAboutMe, field);
   }
}