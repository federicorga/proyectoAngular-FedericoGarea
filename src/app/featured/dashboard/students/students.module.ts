import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { SharedModule } from '../../../shared/shared.module';
import { APP_CONFIG } from '../../../core/injection-token';
import { config } from 'rxjs';

import { StudentsComponent } from './students.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { FormStudentComponent } from './components/formStudent/formStudent.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from '../../../pipes/full-name.pipe';
import { ContentFormListStudentsComponent } from './components/content-form-ilist-sutdents/content-form-ilist-sutdents.component';



@NgModule({
  declarations: [
    FormStudentComponent,
    TableStudentsComponent,
    StudentsComponent,
    ConfirmDialogComponent,
    FullNamePipe,
ContentFormListStudentsComponent
 

    
  ],
  imports: [
    CommonModule,
    SharedModule,

    MatTableModule,

  ],
  exports: [
    StudentsComponent,
   ContentFormListStudentsComponent
  ],
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
