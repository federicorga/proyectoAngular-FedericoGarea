import { Component, Inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/Course';
import { CourseService } from '../../../../../core/services/course.service';

import { Observable } from 'rxjs';
import { AuthService } from '../../../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../students/components/confirm-dialog/confirm-dialog.component';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';



@Component({
  selector: 'course-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'see-more', 'actions'];
  dataSource: Course[] = [];
  authUser: Observable<any>;

  constructor(private dialog: MatDialog,
    private courseService: CourseService,
    @Inject('TITLE') private title: string, private authService: AuthService
  ) {
    this.authUser = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.courseService.getCourses();
    this.courseService.courses$.subscribe({
      next: (data) => {
   
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      },
    });
  }


  deleteCourse(id: string,title:string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: `¿Estás seguro de que querés eliminar el curso "${title}"?` }
    });
  
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.courseService.deleteCourse(id);
      }
    });
  };
  
   editCourse(course: Course): void {
    const dialogRef = this.dialog.open(EditCourseDialogComponent, {
      width: '400px',
      data: { ...course }
    });

    dialogRef.afterClosed().subscribe((result: Course | undefined) => {
      if (result) {
        this.courseService.updateCourse(result);
      }
    });
  }

}









