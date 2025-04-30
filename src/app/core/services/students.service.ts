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
    const newId = this.generateId(this._students);
    const newStudent = { ...student, id: newId };
  
    this._students = [...this._students, newStudent];
    this.dataSubject.next(this._students);
  }

  editStudent(student: Student): void {
    this._students = this._students.map(s =>
      s.id === student.id ? { ...s, ...student } : s
    );
    this.dataSubject.next(this._students);
  }

  deleteStudent(id: number): void {
    this._students = this._students.filter(s => s.id !== id);
    this.dataSubject.next(this._students); 
  }

  generateId(array: any[]): number {
    if (array.length === 0) return 1;
    return Math.max(...array.map(item => item.id)) + 1;
  }
  


  constructor() {}
}
