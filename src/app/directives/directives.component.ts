import { Component } from '@angular/core';



@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
public name:string="Patricio";
public lastName:string="Perez";
public age:number=15;



}
