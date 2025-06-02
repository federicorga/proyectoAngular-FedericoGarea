import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
// Si usas inputs, selects o cualquier otro componente Angular Material:
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [UsersComponent, FormComponent, TableComponent, EditUserDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
