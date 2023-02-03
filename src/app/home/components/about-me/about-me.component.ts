import { Component, OnInit } from '@angular/core';

import { AboutMeService } from '../../services/about-me.service';

@Component({
   selector: 'app-about-me',
   templateUrl: './about-me.component.html',
   styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
   aboutMe: string = '';
   logged: boolean = true;

   constructor(private aboutSvc: AboutMeService) {}

   ngOnInit(): void {
      this.aboutSvc
         .get()
         .subscribe(({ aboutMeText }) => (this.aboutMe = aboutMeText));
   }
}
