import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../../featured/dashboard/students/interfaces/Student';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private dataSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.dataSubject.asObservable();

  private apiUrl = `${environment.apiUrl}/students`; 

  constructor(private http: HttpClient) {}


  fetchStudentsFromApi(): void {
    this.http.get<Student[]>(this.apiUrl).subscribe({
      next: (students) => {
        this.dataSubject.next(students);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      },
    });
  }


  addStudent(student: Student): void {
    this.http.post<Student>(this.apiUrl, student).subscribe({
      next: (newStudent) => {
        this.fetchStudentsFromApi(); 
      },
      error: (error) => {
        console.error('Error adding student:', error);
      },
    });
  }


  editStudent(student: Student): void {
    this.http.put(`${this.apiUrl}/${student.id}`, student).subscribe({
      next: () => {
        this.fetchStudentsFromApi(); 
      },
      error: (error) => {
        console.error('Error updating student:', error);
      },
    });
  }


  deleteStudent(id: number | string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.fetchStudentsFromApi(); 
      },
      error: (error) => {
        console.error('Error deleting student:', error);
      },
    });
  }

 
  getStudentsPromise(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Student[]>(this.apiUrl).subscribe({
        next: (students) => resolve(students),
        error: (error) => reject(error),
      });
    });
  }
}
