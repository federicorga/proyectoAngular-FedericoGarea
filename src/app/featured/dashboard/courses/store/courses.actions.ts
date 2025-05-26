import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


import { Course } from '../interfaces/Course';

export const CoursesActions = createActionGroup({
  source: 'Courses/API',
  events: {
    'Load Coursess': props<{ coursess: Course[] }>(),
    'Add Courses': props<{ courses: Course }>(),
    'Upsert Courses': props<{ courses: Course }>(),
    'Add Coursess': props<{ coursess: Course[] }>(),
    'Upsert Coursess': props<{ coursess: Course[] }>(),
    'Update Courses': props<{ courses: Update<Course> }>(),
    'Update Coursess': props<{ coursess: Update<Course>[] }>(),
    'Delete Courses': props<{ id: string }>(),
    'Delete Coursess': props<{ ids: string[] }>(),
    'Clear Coursess': emptyProps(),
  }
});
