import { Injectable } from '@angular/core';
import {
   Storage,
   StorageReference,
   UploadResult,
   getBlob,
   ref,
   uploadBytes,
} from '@angular/fire/storage';
import { MessageService } from 'primeng/api';

@Injectable({
   providedIn: 'root',
})
export class ProfilePictureService {
   constructor(private storage: Storage, private messageSvc: MessageService) {}

   async uploadImage(event: any): Promise<UploadResult> {
      try {
         const image: File = event.target.files[0];
         const imgRef: StorageReference = ref(this.storage, 'perfil-portfolio/foto-perfil');

         const uploadImgResult = await uploadBytes(imgRef, image);
         return uploadImgResult;
      } catch (err) {
         this.messageSvc.add({
            severity: 'error',
            key: 'img-profile',
            summary: 'Error',
            detail: 'Error al subir imagen de perfil',
         });
         throw err;
      }
   }

   async getImage(): Promise<Blob> {
      try {
         const imgRef: StorageReference = ref(this.storage, 'perfil-portfolio/foto-perfil');

         const imgBlob = await getBlob(imgRef);
         return imgBlob;
      } catch (err) {
         this.messageSvc.add({
            severity: 'error',
            key: 'img-profile',
            summary: 'Error',
            detail: 'Error al cargar imagen de perfil',
         });
         throw err;
      }
   }
}
