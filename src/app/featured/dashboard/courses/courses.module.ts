import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditCourseDialogComponent } from './components/edit-course-dialog/edit-course-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    CoursesComponent,
    DetailsComponent,
    EditCourseDialogComponent,

  ],
  imports: [CommonModule, SharedModule,MatDialogModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
