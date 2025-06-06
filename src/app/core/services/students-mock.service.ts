import { Inject, Injectable } from '@angular/core';
import { Student } from '../../featured/dashboard/students/interfaces/Student';
import { APP_CONFIG, AppConfig } from '../../core/injection-token';

@Injectable({
  providedIn: 'root',
})

export class StudentsMockService {
  public students:Student[] =[]; 
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {

  }



}
