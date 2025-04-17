import { Component,Input,OnChanges,Output,SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../interfaces/Student';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-table-students',
  standalone: false,
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.scss'
})



export class TableStudentsComponent implements OnChanges {


  

  @Output()
  public selectedStudent:EventEmitter<Number>=new EventEmitter(); //Enviar un evento o datos al padre
  
  deleteStudent(id:Number):void{ //lo envio al padre
  this.selectedStudent.emit(id);
  }

  
@Output() public editarEstudiante: EventEmitter<Student> = new EventEmitter();

emitEditar(student: Student): void {
  this.editarEstudiante.emit(student);
}
  
  @Output()
  public setNota: EventEmitter<{ id: number, note: number }> = new EventEmitter(); // para actualizar nota
  setNoteStudent(id: number, note: number): void {
    this.setNota.emit({ id, note });
  }
  

  @Input() public students: Student[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'note', 'course', 'isActive','actions'];
  dataSource = new MatTableDataSource<Student>();

  ngOnChanges(changes: SimpleChanges): void { // Detecta cambios en las propiedades de Input
    if (changes['students']) {
      this.dataSource.data = this.students;
    }
  }

  
  
}


