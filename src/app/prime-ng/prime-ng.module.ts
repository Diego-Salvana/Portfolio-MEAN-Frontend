import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
   exports: [
      ButtonModule,
      ColorPickerModule,
      ConfirmDialogModule,
      DialogModule,
      FileUploadModule,
      InputTextareaModule,
      InputTextModule,
      PasswordModule,
      ProgressBarModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      TooltipModule,
   ],
})
export class PrimeNgModule {}
