import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


import { Student } from '../interfaces/Student';

export const StudentsActions = createActionGroup({
  source: 'Students/API',
  events: {
    'Load Studentss': props<{ studentss: Student[] }>(),
    'Add Students': props<{ students: Student }>(),
    'Upsert Students': props<{ students: Student }>(),
    'Add Studentss': props<{ studentss: Student[] }>(),
    'Upsert Studentss': props<{ studentss: Student[] }>(),
    'Update Students': props<{ students: Update<Student> }>(),
    'Update Studentss': props<{ studentss: Update<Student>[] }>(),
    'Delete Students': props<{ id: string }>(),
    'Delete Studentss': props<{ ids: string[] }>(),
    'Clear Studentss': emptyProps(),
  }
});
