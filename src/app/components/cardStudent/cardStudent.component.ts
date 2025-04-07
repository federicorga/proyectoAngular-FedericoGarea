import { Component } from '@angular/core';
import { Student } from '../../interfaces/Student';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './cardStudent.component.html',
  styleUrl: './cardStudent.component.css'
})
export class CardStudentComponent {
  
  title: string = 'Titulo'; // Título estático
  description: string = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'; // Descripción estática
  imageUrl: string = 'https://www.w3schools.com/bootstrap4/img_avatar1.png'; // URL de imagen estática
  age:number=15;
  note:number=0;



  public students1: Student[] = [
    {
      id:1,
        firstName: "Juan",
        lastName: "Pérez",
        age: 20,
        note: 8.5,
        picture: this.imageUrl,
        isActive: true
    },
    {
      id:2,
        firstName: "Ana",
        lastName: "Gómez",
        age: 22,
        note: 5,
        picture: this.imageUrl,
        isActive:true
    },
    {
      id:3,
        firstName: "Carlos",
        lastName: "Martínez",
        age: 19,
        note: 6,
        picture: this.imageUrl,
        isActive:true
    },
    {
      id:4,
        firstName: "Lucía",
        lastName: "Rodríguez",
        age: 21,
        note: 10,
        picture: this.imageUrl,
        isActive:true
    },
    {
      id:5,
        firstName: "Pedro",
        lastName: "Hernández",
        age: 23,
        note: 3,
        picture: this.imageUrl,
        isActive:true
    }
  ];
}
