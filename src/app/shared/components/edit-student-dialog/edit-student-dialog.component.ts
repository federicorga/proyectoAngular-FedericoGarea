import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../interfaces/Student';
@Component({
  selector: 'app-edit-student-dialog',
  standalone: false,
  templateUrl: './edit-student-dialog.component.html',
  styleUrl: './edit-student-dialog.component.scss'
})
export class EditStudentDialogComponent {
 
 
    studentData: Partial<Student>;
  
    constructor(
      public dialogRef: MatDialogRef<EditStudentDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Student
    ) {
      this.studentData = { ...data }; // Para no mutar el original
    }
  
    onSave(): void {
      this.dialogRef.close(this.studentData); // Devuelve los datos al cerrar
    }
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
  
}
