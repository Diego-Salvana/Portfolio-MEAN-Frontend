import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProfilePictureService } from '../../services/profile-picture.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
   @Input() isLogged$!: Observable<boolean>;
   profilePicture: string = '';
   isLoading: boolean = true;

   constructor(private profilePictureSvc: ProfilePictureService) {}

   ngOnInit(): void {
      this.getProfilePicture();
   }

   getProfilePicture() {
      this.profilePictureSvc
         .getImage()
         .then((imgBlob) => {
            const reader = new FileReader();
            reader.readAsDataURL(imgBlob);
            reader.onload = () => {
               this.profilePicture = <string>reader.result;
               this.isLoading = false;
            };
         })
         .catch((err) => console.error(err));
   }

   updateProfilePicture(event: any) {
      const fileList: FileList = event.target.files;
      if (fileList.length < 1) return;

      this.isLoading = true;
      this.profilePictureSvc
         .uploadImage(event)
         .then(() => {
            const imgFile: File = fileList[0];
            const reader = new FileReader();
            reader.readAsDataURL(imgFile);
            reader.onload = () => {
               this.profilePicture = <string>reader.result;
               this.isLoading = false;
            };
         })
         .catch((err) => console.log(err));
   }
}
