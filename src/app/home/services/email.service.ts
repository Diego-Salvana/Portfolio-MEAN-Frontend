import { Injectable } from '@angular/core';
import emailJS, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})
export class EmailService {
   private publicKey = environment.publicKeyEmailJS;
   private serviceID = environment.serviceID;
   private templateID = environment.templateID;

   connect(): void {
      emailJS.init(this.publicKey);
   }

   send(form: HTMLFormElement): Promise<string> {
      return emailJS
         .sendForm(this.serviceID, this.templateID, form)
         .then((res: EmailJSResponseStatus) => {
            if (res.status !== 200) throw { text: 'An error occurred while sending the email' };

            return 'Tu mensaje se envió con éxito.';
         })
         .catch((err) => {
            console.error('Error:', err);
            throw 'Ocurrió un error al enviar el mensaje.';
         });
   }
}
