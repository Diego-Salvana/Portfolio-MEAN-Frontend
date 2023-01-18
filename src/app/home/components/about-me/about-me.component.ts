import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
   aboutMe: string = 'Estudiante de programación en constante apendizaje de tecnologías para la creación de aplicaciones y sitios web. Desarrollando proyectos principalmente en Angular.';
   // classBtnEdit: string = 'p-button-raised p-button-info p-button-text p-button-lg';
   logged: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
