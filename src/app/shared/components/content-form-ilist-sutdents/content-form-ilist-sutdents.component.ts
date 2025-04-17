import { Component } from '@angular/core';
import { Student } from '../../../interfaces/Student';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { DialogFormStudentComponent } from '../dialog-form-student/dialog-form-student.component';


@Component({
  selector: 'app-content-form-ilist-sutdents',
  standalone: false,
  templateUrl: './content-form-ilist-sutdents.component.html',
  styleUrl: './content-form-ilist-sutdents.component.scss'
})
export class ContentFormIListSutdentsComponent {


public students:Student[] =[]; //array de estudiantes que almacena los estudiantes del form

constructor(private dialog: MatDialog) {}

opendialogFormAddStudent(): void { //abre el dialogo para agregar un estudiante.
  const dialogRef = this.dialog.open(DialogFormStudentComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe((nuevoEstudiante: Student) => {
    if (nuevoEstudiante) {
      this.addStudent(nuevoEstudiante);
    }
  });
}

  openDialogDeleteStudent(id: Number): void { //abre el dialogo para eliminar un estudiante.
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que querés eliminar este estudiante?' }
    });

   

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteStudent(id);
      }
    });
  }

  openDialogEditStudent(student: Student): void { //abre el dialogo para editar un estudiante.
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '400px',
      data: student
    });
  
    dialogRef.afterClosed().subscribe(result => { // Se ejecuta cuando se cierra el diálogo (result es el estudiante editado)
      if (result) {
        this.editStuden(result); // Actualiza el estudiante en el array de estudiantes
      }
    });
  }


//------------------------FUNCIONES DE ESTUDIANTES------------------------//

  addStudent(student: Student) { //funcion que se ejecuta cuando se crea un estudiante.
 
    const newStudent: Student = {
      ...student, // Copiamos todas las propiedades del estudiante
      id: this.generateId(this.students) // Usamos la función generando el ID basado en el tamaño del array
    };
    this.students = [...this.students, newStudent]; //agregamos el estudiante al array de estudiantes.

  }

  deleteStudent(id:Number):void{ //Elimina a un estudiante a travez del boton.
    this.students=this.students.filter((student)=>student.id!=id)
   }

   editStuden(student: Student): void { //funcion que se ejecuta cuando se edita un estudiante.
    // Actualiza el estudiante en el array de estudiantes
    this.students = this.students.map(s =>
      s.id === student.id ? { ...s, ...student } : s
    );
  }

 // Función que recibe un array y devuelve el siguiente id
 generateId(array: any[]): number {
  return array.length + 1; // Retorna el próximo id basado en el tamaño del array
}
}
