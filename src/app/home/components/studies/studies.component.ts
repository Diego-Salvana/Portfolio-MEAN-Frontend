import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ConfirmationService } from 'primeng/api';

import { Study } from '../../interfaces/study.interface';
import { StudiesService } from '../../services/studies.service';

@Component({
   selector: 'app-studies',
   templateUrl: './studies.component.html',
   styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
   studies: Study[] = [];

   constructor(
      private studiesSvc: StudiesService,
      private confirmationSvc: ConfirmationService
   ) {}

   ngOnInit(): void {
      this.studiesSvc.getAll().subscribe((data) => (this.studies = data));
   }

   delete(id: any): void {
      this.confirmationSvc.confirm({
         key: 'studyAlert',
         message: 'Estás por borrar un estudio. ¿Deseas continuar?',
         accept: () =>
            this.studiesSvc.delete(id).subscribe({
               next: () => {
                  this.studies = this.studies.filter((el) => el.id !== id);
               },
               error: () => null,
            }),
      });
   }
}
