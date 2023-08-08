import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from 'src/app/shared/services/projects.service';
import { Project } from 'src/app/shared/interfaces/project.interface';
import * as formHelper from '../../../shared/helpers/form.helper';

@Component({
   selector: 'app-form-project',
   templateUrl: './form-project.component.html',
   styleUrls: ['./form-project.component.css'],
})
export class FormProjectComponent implements OnInit {
   @Input() title: string = '';
   @Input() btnLabel: string = '';
   @Input() loadingBtn: boolean = false;
   @Output() onSave: EventEmitter<Project> = new EventEmitter();
   formProject: FormGroup = this.formBuilder.group({
      _id: null,
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      linkWeb: [''],
      linkGitHub: ['', Validators.required],
   });

   constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private projectsSvc: ProjectsService,
      private renderer2: Renderer2
   ) {}

   ngOnInit(): void {
      if (this.activatedRoute.snapshot.params['id']) {
         let { id } = this.activatedRoute.snapshot.params;

         this.projectsSvc
            .getById(id)
            .subscribe((project) => this.formProject.reset(project));
      }
   }

   onSaveEmit(): void {
      formHelper.submitForm(this.formProject, this.onSave);
   }

   isInvalidField(field: string): boolean {
      return formHelper.invalidField(this.formProject, field);
   }

   onBlurEvent(event: FocusEvent): void {
      const inputElement = event.target;
      this.renderer2.addClass(inputElement, 'ng-dirty');
   }
}
