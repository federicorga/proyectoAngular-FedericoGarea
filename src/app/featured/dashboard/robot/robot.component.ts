import { Component } from '@angular/core';

@Component({
  selector: 'app-robot',
  standalone: false,
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.scss'
})
export class RobotComponent {
owner:string = 'robot';
batery:number = 100;
constructor() {
  this.batery = Math.floor(Math.random() * 100);
}
};



