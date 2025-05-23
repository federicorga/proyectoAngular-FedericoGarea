import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '../../../shared/shared.module';
import { APP_CONFIG } from '../../../core/injection-token';
import { config } from 'rxjs';
import { StudentsComponent } from './students.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { FullNamePipe } from '../../../pipes/full-name.pipe';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [FormComponent, TableComponent, StudentsComponent,FullNamePipe,EditStudentDialogComponent,ConfirmDialogComponent],
  imports: [CommonModule, SharedModule, MatDialogModule,FormsModule],
  exports: [StudentsComponent],
  providers: [

    {
      provide: 'TITLE',
      useValue: 'Student Management',
    },
    {
      provide: APP_CONFIG,
      useValue: config,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class StudentsModule {}
