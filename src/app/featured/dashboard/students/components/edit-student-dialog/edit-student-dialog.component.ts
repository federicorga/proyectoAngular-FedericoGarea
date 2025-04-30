import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../interfaces/Student';

import { CourseService } from '../../../../../core/services/course.service';


@Component({
  selector: 'app-edit-student-dialog',
  standalone: false,
  templateUrl: './edit-student-dialog.component.html',
  styleUrl: './edit-student-dialog.component.scss'
})
export class EditStudentDialogComponent {
  studentData: Partial<Student>;
    courseNames!: string[];
  
  

  constructor(
    private courseService: CourseService,
    public dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.studentData = { ...data };
      // Pedimos los títulos de los cursos
  this.courseService.getCoursesTitles();

  // Nos suscribimos y los guardamos en courseNames
  this.courseService.coursesTitles$
    .subscribe((courses) => {
      this.courseNames = courses.map((c) => c.toUpperCase()).sort((a, b) => a.localeCompare(b));
    });
  }


  onSave(): void {
    this.dialogRef.close(this.studentData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
