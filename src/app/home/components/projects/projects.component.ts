import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   classBtnPlus: string = 'p-button-raised p-button-success p-button-text p-button-lg';

  constructor() { }

  ngOnInit(): void {
  }

}
