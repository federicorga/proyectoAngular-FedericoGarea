import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../../../../core/services/students.service';
import { APP_CONFIG, AppConfig } from '../../../../../core/injection-token';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { CourseService } from '../../../../../core/services/course.service';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'student-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  courseNames: string[] = [];

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private studentsService: StudentsService,
    private courseService: CourseService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {


    this.formGroup = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      note: [0, [Validators.maxLength(2)]],
      isActive: ['inactivo', [Validators.required]],
      picture: ['https://www.w3schools.com/bootstrap4/img_avatar1.png'],
      course: ['', [Validators.required]], 
    });
  }

  
  ngOnInit(): void {

    this.courseService.getCourses();
    this.courseService.coursesTitles$
      .pipe(
        filter((titles) => titles.length > 0),
        map((titles) =>
          titles
            .map((title) => title.toUpperCase())
            .sort((a, b) => a.localeCompare(b))
        ),

      )
      .subscribe((titles) => {
        this.courseNames = titles;
      });
  }

  submit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.matDialog
      .open(DialogComponent)
      .afterClosed()
      .subscribe({
        next: (confirmed: boolean) => {
          if (confirmed) {
            this.studentsService.addStudent(this.formGroup.value);
            this.formGroup.reset({
              note: 0,
              isActive: 'inactivo',
              picture: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
            });
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
