import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AboutMeService } from '../../../shared/services/about-me.service';
import { AboutMe } from '../../../shared/interfaces/about-me.interface';

@Component({
   selector: 'app-about-me',
   templateUrl: './about-me.component.html',
   styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
   aboutMe!: Observable<AboutMe>;
   @Input() isLogged$!: Observable<boolean>;

   constructor(private aboutSvc: AboutMeService) {}

   ngOnInit(): void {
      this.aboutMe = this.aboutSvc.get();
   }
}
