import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav'; 

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = false;

    drawer!: MatDrawer;
}
