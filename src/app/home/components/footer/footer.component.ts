import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { EmailService } from '../../services/email.service';

@Component({
   selector: 'app-footer',
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
   contactForm: FormGroup;
   @ViewChild('myForm') myForm!: ElementRef<HTMLFormElement>;
   @ViewChild('btnSubmit') btnSubmit!: ElementRef<HTMLButtonElement>;
   private emailRexExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

   constructor(
      private formBuilder: FormBuilder,
      private renderer2: Renderer2,
      private emailSvc: EmailService,
      private messageSvc: MessageService
   ) {
      this.contactForm = this.formBuilder.group({
         name: ['', [Validators.required]],
         email: ['', [Validators.required, Validators.pattern(this.emailRexExp)]],
         message: ['', [Validators.required]],
      });
   }

   ngOnInit(): void {
      this.emailSvc.connect();
   }

   sendEmail(): void {
      const formElement = this.myForm.nativeElement;
      this.renderer2.addClass(formElement, 'ng-submitted');

      if (this.contactForm.invalid) return;

      this.renderer2.setAttribute(this.btnSubmit.nativeElement, 'disabled', 'true');

      this.emailSvc
         .send(formElement)
         .then((res) => {
            this.contactForm.reset();
            this.renderer2.removeClass(formElement, 'ng-submitted');
            this.messageSvc.add({ severity: 'success', summary: 'Enviado', detail: res, key: 'email' });
         })
         .catch((err) => {
            this.messageSvc.add({ severity: 'error', summary: 'Error', detail: err, key: 'email' });
         })
         .finally(() => this.renderer2.removeAttribute(this.btnSubmit.nativeElement, 'disabled'));
   }
}
