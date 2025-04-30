import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../featured/dashboard/students/interfaces/Student';

@Pipe({
  name: 'fullName',
  standalone: false,
})
export class FullNamePipe implements PipeTransform {
  transform(student: Student): string {
    const first = student.firstName?.trim() || '';
    const last = student.lastName?.trim() || '';
    return (first || last) ? `${first} ${last}`.trim() : 'Nombre no disponible';
  }
}