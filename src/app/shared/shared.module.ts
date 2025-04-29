import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
// Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



// Directives
import { TitleSizeDirective } from './directives/title-size.directive';


@NgModule({
  declarations: [
    SidebarComponent,  
    NavBarComponent,
    TitleSizeDirective,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
   
],
  exports: [ 
    SidebarComponent,
    NavBarComponent,
    TitleSizeDirective,

    

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
MatDialogModule,
  ]
})
export class SharedModule {}
