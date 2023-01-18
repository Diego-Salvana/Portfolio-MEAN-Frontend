import { Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'app-card-project',
   templateUrl: './card-project.component.html',
   styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {
   @Input() typeCard: string = '';
   @Input() classIcon: string = '';

   constructor() {}

   ngOnInit(): void {}
}
