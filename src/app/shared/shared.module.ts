import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormStudentComponent } from './components/formStudent/formStudent.component';


// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { MatTableModule } from '@angular/material/table';
import { ContentFormIListSutdentsComponent } from './components/content-form-ilist-sutdents/content-form-ilist-sutdents.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { DialogFormStudentComponent } from './components/dialog-form-student/dialog-form-student.component';
import { FullNamePipe } from '../pipes/full-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';


@NgModule({
  declarations: [
    SidebarComponent,
  
    FormStudentComponent,
    DialogFormStudentComponent,
    TableStudentsComponent,
    ContentFormIListSutdentsComponent,
    NavBarComponent,
    ConfirmDialogComponent,
    EditStudentDialogComponent,
FullNamePipe,
TitleSizeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    NavBarComponent,
    ConfirmDialogComponent,
   
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    ContentFormIListSutdentsComponent,
  ]
})
export class SharedModule {}
