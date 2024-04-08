import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export function submitForm(form: FormGroup, emitter: EventEmitter<any>): void {
   if (form.invalid) {
      markAllAsDirty(form);
      form.markAllAsTouched();

      console.error('Invalid form', form);
      return;
   }

   emitter.emit(form.value);
}

export function markAllAsDirty(form: FormGroup): void {
   const formControls = form.controls;
   for (let field in formControls) formControls[field].markAsDirty();
}

export function invalidField(form: FormGroup, field: string): boolean {
   return form.controls[field].invalid && form.controls[field].touched;
}
