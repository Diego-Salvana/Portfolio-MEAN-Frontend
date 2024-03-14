import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-layout-card',
   templateUrl: './layout-card.component.html',
   styleUrls: ['./layout-card.component.css'],
})
export class LayoutCardComponent {
   @Input() imageUrl: string = '';
   @Input() title: string = '';
   @Input() technologies: string = '';
   @Input() linkWeb: string = '';
   @Input() linkGitHub: string = '';
}
