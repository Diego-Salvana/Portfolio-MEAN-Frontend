import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-btn-back-portfolio',
   templateUrl: './btn-back-portfolio.component.html',
   styleUrls: ['./btn-back-portfolio.component.css'],
})
export class BtnBackPortfolioComponent {
   constructor(private router: Router) {}

   goToPortfolio(): void {
      this.router.navigateByUrl('/');
   }
}
