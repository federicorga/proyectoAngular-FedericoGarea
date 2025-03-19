import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = 'Titulo'; // Título estático
  description: string = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'; // Descripción estática
  imageUrl: string = 'https://www.w3schools.com/bootstrap4/img_avatar1.png'; // URL de imagen estática
}
