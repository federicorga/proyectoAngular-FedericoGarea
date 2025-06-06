import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentsActions } from './students.actions';


@Injectable()
export class StudentsEffects {

  loadStudentss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentsActions.loadStudentss),
      concatMap(() =>

        EMPTY.pipe(
          map(data => StudentsActions.loadStudentssSuccess({ data })),
          catchError(error => of(StudentsActions.loadStudentssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
