import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../../interfaces/Student';
import { StudentsService } from '../../../../../core/services/students.service';

import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'student-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id','fullName', 'email', 'course','isActive','actions'];
  dataSource: Student[] = [];
  

  constructor(
    private studentsService: StudentsService,
    @Inject('TITLE') private title: string,
    private dialog: MatDialog // Aquí inyectamos MatDialog
  ) {}

  ngOnInit(): void {
    this.studentsService.getStudentsObs();
    this.studentsService.students$.subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });

    this.studentsService
      .getStudentsPromise()
      .then((value) => {
        console.log(value);
      })
      .catch((error) => console.log(error));
  }

  
  // ✅ Eliminar estudiante por ID
  deleteStudent(id: number): void {
    this.studentsService.deleteStudent(id);
  }

  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '400px',
      data: student
    });

    dialogRef.afterClosed().subscribe((result: Partial<Student>) => {
      if (result) {
        const updatedStudent = { ...student, ...result };
        this.studentsService.editStudent(updatedStudent);
      }
    });
  }

  
  
}
