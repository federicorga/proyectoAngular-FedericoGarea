import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthYear',
  standalone: false,

})
export class BirthYearPipe implements PipeTransform {

  transform(age: number): number {
    if (!age || age < 0) {
      return 0; // Si no se pasa una edad válida, retornamos 0
    }
    
    const currentYear = new Date().getFullYear(); // Año actual
    return currentYear - age; // Calculamos el año de nacimiento
  }
}