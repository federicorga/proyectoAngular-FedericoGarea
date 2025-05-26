
import { createAction, props } from '@ngrx/store';
export const setAuthUser = createAction(
  '[Auth] setAuthUser', //nombre del action
  props<{ payload: { email: string; password: string; role: string } }>() // data que se le pasa al action (que recibe)
);

export const unsetAuthUser = createAction('[Auth] unsetAuthUser'); //Devuelve el estado inicial del reducer, es decir, authUser: null
