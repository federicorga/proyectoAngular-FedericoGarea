import { ActionReducerMap } from '@ngrx/store';

import { authFeatureName, authReducer, AuthState } from './auth/auth.reducer';

export interface RootState {

  [authFeatureName]: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = { //Se declara aqui adentro cada reducer

  [authFeatureName]: authReducer,
};
