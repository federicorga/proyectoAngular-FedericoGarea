import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Student } from '../../featured/dashboard/students/interfaces/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private dataSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.dataSubject.asObservable();

  private _students: Student[] = [
    {
      id:0,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      course: 'Angular',
      isActive:false
    },
    {
      id:1,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@gmail.com',
      course: 'React',
      isActive:true
    },
  ];

  getStudents(): Student[] {
    return this._students;
  }

  getStudentsPromise(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._students);
      }, 2000);
    });
  }

  getStudentsObs() {
    this.dataSubject.next(this._students);
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  addStudentObs(student: Student) {
    this._students = [...this._students, student];
    this.dataSubject.next(this._students);
  }

  editStudent(student: Student): void {
    this._students = this._students.map(s =>
      s.id === student.id ? { ...s, ...student } : s
    );
    this.dataSubject.next(this._students); // actualiza el observable
  }

  deleteStudent(id: number): void {
    this._students = this._students.filter(s => s.id !== id);
    this.dataSubject.next(this._students); // actualiza el observable
  }

  generateId(array: any[]): number {
    return array.length + 1; // Retorna el próximo id basado en el tamaño del array
  }
  


  constructor() {}
}
