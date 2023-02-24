import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import * as formHelper from '../../../shared/helpers/form.helper';
import { Study } from 'src/app/shared/interfaces/study.interface';
import { StudiesService } from 'src/app/shared/services/studies.service';

@Component({
   selector: 'app-form-study',
   templateUrl: './form-study.component.html',
   styleUrls: ['./form-study.component.css'],
})
export class FormStudyComponent implements OnInit {
   @Input() title: string = '';
   @Input() btnLabel: string = '';
   @Input() loadingBtn: boolean = false;
   @Output() onSave: EventEmitter<Study> = new EventEmitter();

   formStudy: FormGroup = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      institution: ['', Validators.required],
      start: ['', [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      end: [''],
   });

   constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private studySvc: StudiesService
   ) {}

   ngOnInit(): void {
      if (this.activatedRoute.snapshot.params['id']) {
         let { id } = this.activatedRoute.snapshot.params;

         this.studySvc
            .getById(id)
            .subscribe((study) => this.formStudy.setValue(study));
      }
   }

   onSaveEmit(): void {
      formHelper.submitForm(this.formStudy, this.onSave);
   }

   invalidField(field: string): boolean {
      return formHelper.invalidField(this.formStudy, field);
   }
}
