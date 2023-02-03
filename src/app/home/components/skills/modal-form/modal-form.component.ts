import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-modal-form',
   templateUrl: './modal-form.component.html',
   styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent {
   @Input() displayModal: boolean = false;
   @Output() hideModal: EventEmitter<any> = new EventEmitter();
   icon: string = "<i class='pi pi-minus'></i>";

   formSkill: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['fd', Validators.required],
      color: ['', Validators.required],
   });

   constructor(private formBuilder: FormBuilder) {}

   ngOnInit(): void {}

   close() {
      let values = this.formSkill.value;
      console.log(values);

      this.displayModal = false;
   }

   hide() {
      console.log('hide modal');
      this.hideModal.emit();
      this.formSkill.reset();
   }
}
