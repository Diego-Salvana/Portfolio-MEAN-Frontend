import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as formHelper from '../../../shared/helpers/form.helper';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   loadingBtn: boolean = false;
   loginForm: FormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   });

   constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private authSvc: AuthService,
      private messageSvc: MessageService
   ){}

   logIn(): void {
      if (this.loginForm.invalid) {
         formHelper.markAllAsDirty(this.loginForm);
         this.loginForm.markAllAsTouched();
         return;
      }

      this.loadingBtn = true;
      const { email, password } = this.loginForm.value;

      this.authSvc.login({ email, password }).subscribe({
         next: () => {
            this.loadingBtn = false;
            this.router.navigate(['/']);
         },
         error: (err) => {
            this.loadingBtn = false;
            this.messageSvc.add(err);
         },
      });
   }

   invalidField(field: string): boolean {
      return formHelper.invalidField(this.loginForm, field);
   }
}
