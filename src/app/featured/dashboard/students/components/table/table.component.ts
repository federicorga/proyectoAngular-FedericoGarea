import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../../interfaces/Student';
import { StudentsService } from '../../../../../core/services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'student-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'course', 'isActive', 'actions'];
  dataSource: Student[] = [];
  errorMessage: string | null = null; // Variable para almacenar errores
  authUser: Observable<any>;

  constructor(
    private studentsService: StudentsService,
    @Inject('TITLE') private title: string,
    private dialog: MatDialog,
      private authService: AuthService 
  ) {
     this.authUser = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.studentsService.students$.subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los estudiantes. Por favor, intente nuevamente.';
        console.error('Error fetching students:', error);
      },
    });

    this.studentsService.fetchStudentsFromApi();
  }

  deleteStudent(id: number | string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas eliminar este estudiante?' },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.studentsService.deleteStudent(id);
      }
    });
  }

  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '400px',
      data: student,
    });

    dialogRef.afterClosed().subscribe((result: Partial<Student>) => {
      if (result) {
        const updatedStudent = { ...student, ...result };
        this.studentsService.editStudent(updatedStudent);
      }
    });
  }
}
