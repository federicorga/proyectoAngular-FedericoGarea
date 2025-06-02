import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../interfaces/Course';


@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.scss'],
  standalone:false,
})
export class EditCourseDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.form = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required]
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({
        ...this.data,
        ...this.form.value
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
