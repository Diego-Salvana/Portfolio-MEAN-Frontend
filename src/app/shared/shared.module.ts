import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { AlertConfirmComponent } from './components/alert-confirm/alert-confirm.component';
import { BtnBackPortfolioComponent } from './components/buttons/btn-back-portfolio/btn-back-portfolio.component';
import { ButtonPrimengComponent } from './components/buttons/button-primeng/button-primeng.component';
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';

@NgModule({
   declarations: [
      AddButtonComponent,
      AlertConfirmComponent,
      BtnBackPortfolioComponent,
      ButtonPrimengComponent,
      DeleteButtonComponent,
      EditButtonComponent,
   ],
   imports: [CommonModule, PrimeNgModule],
   exports: [
      PrimeNgModule,
      ReactiveFormsModule,
      AddButtonComponent,
      AlertConfirmComponent,
      BtnBackPortfolioComponent,
      ButtonPrimengComponent,
      DeleteButtonComponent,
      EditButtonComponent,
   ],
   providers: [MessageService, ConfirmationService],
})
export class SharedModule {}
