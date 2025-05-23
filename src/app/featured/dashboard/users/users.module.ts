import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [UsersComponent, FormComponent, TableComponent],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UsersModule {}
