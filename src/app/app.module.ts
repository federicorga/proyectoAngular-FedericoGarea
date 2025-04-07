import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardStudentComponent } from './components/cardStudent/cardStudent.component';
import { DirectivesComponent } from './directives/directives.component';
import { BirthYearPipe } from './directives/pipes/birth-year.pipe';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    ToolbarComponent,
    CardStudentComponent,
    DirectivesComponent,
    BirthYearPipe,
    StudentslistComponent,
    ReactiveFormsComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
