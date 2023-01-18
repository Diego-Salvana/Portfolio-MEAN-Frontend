import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { ButtonPrimengComponent } from './components/button-primeng/button-primeng.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';

@NgModule({
   declarations: [
      AddButtonComponent,
      ButtonPrimengComponent,
      DeleteButtonComponent,
      EditButtonComponent,
   ],
   imports: [CommonModule, PrimeNgModule],
   exports: [
      AddButtonComponent,
      ButtonPrimengComponent,
      DeleteButtonComponent,
      EditButtonComponent,
   ],
})
export class SharedModule {}
