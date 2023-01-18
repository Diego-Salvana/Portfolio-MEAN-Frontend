import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
   exports: [
      ButtonModule,
      FileUploadModule,
      ProgressBarModule,
      RippleModule,
      ToolbarModule,
      TooltipModule,
   ],
})
export class PrimeNgModule {}
