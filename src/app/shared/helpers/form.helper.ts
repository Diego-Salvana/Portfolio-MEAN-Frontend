import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export function submitForm(form: FormGroup, emitter: EventEmitter<any>): void {
   if (form.invalid) {
      const formControls = form.controls;
      for (let field in formControls) formControls[field].markAsDirty();
      return;
   }

   emitter.emit(form.value);
}

export function invalidField(form: FormGroup, field: string): boolean {
   return form.controls[field].invalid && form.controls[field].dirty;
}
