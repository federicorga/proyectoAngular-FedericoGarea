import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  color: string = '#000000';
  userName: string = '';

  constructor(private authService: AuthService) {
    const dia = new Date().getDay();

    if (dia === 0) {
      this.color = '#FF0000'; // Domingo
    } else if (dia > 0 && dia < 15) {
      this.color = '#00FF00'; // Lunes a Jueves
    } else if (dia >= 15 && dia < 30) {
      this.color = '#0000FF'; // Viernes a Domingo
    } else if (dia === 30) {
      this.color = '#FFFF00'; // 30
    }
  }

  ngOnInit(): void {
    // Obtienes el nombre del usuario al cargar el componente
    this.userName = this.authService.getUserName();
  }
}
