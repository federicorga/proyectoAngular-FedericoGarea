import { Component,Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() drawer!: MatDrawer;
    authUser: Observable<any>;
    userName: string = '';

  constructor(private router: Router, private authService: AuthService) {
    this.authUser = this.authService.authUser$;
    console.log(this.authUser);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    // Obtienes el nombre del usuario al cargar el componente
    this.userName = this.authService.getUserName();
  }
}
