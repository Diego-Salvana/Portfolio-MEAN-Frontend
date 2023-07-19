import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
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
   @Input() loadingBtn: boolean = false;
   @Output() onSave: EventEmitter<AboutMe> = new EventEmitter();
   formAboutMe: FormGroup = new FormGroup({
      _id: new FormControl(''),
      aboutMeText: new FormControl('', [Validators.required]),
   });

   constructor(private aboutMeSvc: AboutMeService, private renderer2: Renderer2) {}

   ngOnInit(): void {
      this.aboutMeSvc.get().subscribe((data) => {
         const { _id, aboutMeText } = data;
         this.formAboutMe.setValue({ _id, aboutMeText });
      });
   }

   onSaveEmit(): void {
      formHelper.submitForm(this.formAboutMe, this.onSave);
   }

   isInvalidField(field: string): boolean {
      return formHelper.invalidField(this.formAboutMe, field);
   }

   onBlurEvent(event: FocusEvent): void {
      const inputElement = event.target;
      this.renderer2.addClass(inputElement, 'ng-dirty');
   }
}
