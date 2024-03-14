import { NgModule } from '@angular/core';

import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
   exports: [
      AnimateModule,
      ButtonModule,
      ColorPickerModule,
      ConfirmDialogModule,
      DialogModule,
      FileUploadModule,
      InputTextareaModule,
      InputTextModule,
      PasswordModule,
      ProgressBarModule,
      ProgressSpinnerModule,
      RippleModule,
      ScrollTopModule,
      SkeletonModule,
      ToastModule,
      ToolbarModule,
      TooltipModule,
   ],
})
export class PrimeNgModule {}
