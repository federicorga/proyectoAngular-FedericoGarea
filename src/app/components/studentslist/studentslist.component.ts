import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Student } from '../../interfaces/Student';

@Component({
  selector: 'app-students-list',
  standalone: false,
  templateUrl: './studentslist.component.html',
  styleUrl: './studentslist.component.css'
})
export class StudentslistComponent {
@Input()
public students:Student[]=[];

@Output()
public selectedStudent:EventEmitter<Number>=new EventEmitter(); //Enviar un evento o datos al padre

onDeleteStudent(id:number):void{ //lo envio al padre
this.selectedStudent.emit(id);
}

@Output()
public setNota: EventEmitter<{ id: number, note: number }> = new EventEmitter(); // para actualizar nota
setNoteStudent(id: number, note: number): void {
  this.setNota.emit({ id, note });
}




}
