import { Component } from '@angular/core';
import { Alumno } from '../directives/interfaces/Alumno';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = 'Titulo'; // Título estático
  description: string = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'; // Descripción estática
  imageUrl: string = 'https://www.w3schools.com/bootstrap4/img_avatar1.png'; // URL de imagen estática
  age:number=15;



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
        note: 5,
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
