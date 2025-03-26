import { Component } from '@angular/core';
import { Alumno } from './interfaces/Alumno';


@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
public name:string="Patricio";
public lastName:string="Perez";
public age:number=15;


public alumnos: Alumno[] = [
  {
      firstName: "Juan",
      lastName: "Pérez",
      age: 20,
      note: 8.5,
      picture: "https://example.com/juan.jpg"
  },
  {
      firstName: "Ana",
      lastName: "Gómez",
      age: 22,
      note: 9.2,
      picture: "https://example.com/ana.jpg"
  },
  {
      firstName: "Carlos",
      lastName: "Martínez",
      age: 19,
      note: 7.8,
      picture: "https://example.com/carlos.jpg"
  },
  {
      firstName: "Lucía",
      lastName: "Rodríguez",
      age: 21,
      note: 8.9,
      picture: "https://example.com/lucia.jpg"
  },
  {
      firstName: "Pedro",
      lastName: "Hernández",
      age: 23,
      note: 6.7,
      picture: "https://example.com/pedro.jpg"
  }
];

}
