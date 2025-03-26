import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardStudentComponent } from './cardStudent/cardStudent.component';
import { DirectivesComponent } from './directives/directives.component';
import { BirthYearPipe } from './directives/pipes/birth-year.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    ToolbarComponent,
    CardStudentComponent,
    DirectivesComponent,
    BirthYearPipe,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
