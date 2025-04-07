import { Component } from '@angular/core';
import { Student } from './interfaces/Student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentsfedericogarea';

  public students: Student[] = [
    {
      id:1,
        firstName: "Juan",
        lastName: "Pérez",
        age: 20,
        note: 8.5,
        picture:"",
        isActive:true
       
    },
    {
      id:2,
        firstName: "Ana",
        lastName: "Gómez",
        age: 22,
        note: 5,
         picture:"",
         isActive:false
    },
    {
      id:3,
        firstName: "Carlos",
        lastName: "Martínez",
        age: 19,
        note: 6,
         picture:"",
         isActive:true
    },
    {
      id:4,
        firstName: "Lucía",
        lastName: "Rodríguez",
        age: 21,
        note: 10,
       picture:"",
       isActive:true
    },
    {
      id:5,
        firstName: "Pedro",
        lastName: "Hernández",
        age: 23,
        note: 3,
 picture:"",
 isActive:false
    }
  ];

  onDeleteStudent(id:Number):void{ //Elimina a un estudiante a travez del boton.
   this.students=this.students.filter((student)=>student.id!=id)
  }

  setNoteStudent(event: { id: number, note: number }): void { //Se le pasa un objeto seteado
    this.students = this.students.map((student) => {
      if (student.id === event.id) {
        student.note = event.note;
      }
      return student;
    });
  }
}
