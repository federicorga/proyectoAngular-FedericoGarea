import { Inject, Injectable } from '@angular/core';
import { Student } from '../../featured/dashboard/students/interfaces/Student';
import { APP_CONFIG, AppConfig } from '../../core/injection-token';

@Injectable({
  providedIn: 'root',
})

export class StudentsMockService {
  public students:Student[] =[]; //array de estudiantes que almacena los estudiantes del form
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log(config);
  }

  addStudent(student: Student) {
    console.log('Student added:', student);
  }

  getStudents(): void {
    console.log('Fetching students...');
  }


}
