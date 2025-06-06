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
      this.color = '#FF0000'; 
    } else if (dia > 0 && dia < 15) {
      this.color = '#00FF00'; 
    } else if (dia >= 15 && dia < 30) {
      this.color = '#0000FF'; 
    } else if (dia === 30) {
      this.color = '#FFFF00';
    }
  }

  ngOnInit(): void {

    this.userName = this.authService.getUserName();
    
  }
}
