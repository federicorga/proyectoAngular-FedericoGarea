import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    ToolbarComponent,
    CardComponent,
    DirectivesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
