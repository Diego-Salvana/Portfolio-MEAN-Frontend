import {
   AfterViewInit,
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   Input,
   Output,
   Renderer2,
   ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-hard-skills',
   templateUrl: './hard-skills.component.html',
   styleUrls: ['./hard-skills.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HardSkillsComponent implements AfterViewInit {
   @Input() name: string = '';
   @Input() skillIcon: string = '';
   @Input() isLogged$!: Observable<boolean>;
   @Output() onEdit: EventEmitter<any> = new EventEmitter();
   @Output() onDelete: EventEmitter<any> = new EventEmitter();
   @ViewChild('skillIcon') skillElement!: ElementRef<HTMLElement>;
   svgContent!: SafeHtml;

   constructor(
      private sanitizer: DomSanitizer,
      private renderer2: Renderer2,
      private changeDetector: ChangeDetectorRef
   ) {}

   ngAfterViewInit(): void {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(this.skillIcon);

      if (this.name.match(/Angular|Vite|Jest/)) {
         this.renderer2.addClass(this.skillElement.nativeElement, 'reduce-width');
      }

      if (this.name.match('NodeJS')) {
         this.renderer2.addClass(this.skillElement.nativeElement, 'increase-width');
      }

      this.changeDetector.detectChanges();
   }

   editEmit(): void {
      this.onEdit.emit();
   }

   deleteEmit(): void {
      this.onDelete.emit();
   }
}
