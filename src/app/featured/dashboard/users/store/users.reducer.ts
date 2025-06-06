import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../../auth/interfaces/User';
import { UsersActions } from './users.actions';

export const usersesFeatureKey = 'userses';

export interface State extends EntityState<User> {

}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({

});

export const reducer = createReducer(
  initialState,
  on(UsersActions.addUsers,
    (state, action) => adapter.addOne(action.users, state)
  ),
  on(UsersActions.upsertUsers,
    (state, action) => adapter.upsertOne(action.users, state)
  ),
  on(UsersActions.addUserss,
    (state, action) => adapter.addMany(action.userss, state)
  ),
  on(UsersActions.upsertUserss,
    (state, action) => adapter.upsertMany(action.userss, state)
  ),
  on(UsersActions.updateUsers,
    (state, action) => adapter.updateOne(action.users, state)
  ),
  on(UsersActions.updateUserss,
    (state, action) => adapter.updateMany(action.userss, state)
  ),
  on(UsersActions.deleteUsers,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UsersActions.deleteUserss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UsersActions.loadUserss,
    (state, action) => adapter.setAll(action.userss, state)
  ),
  on(UsersActions.clearUserss,
    state => adapter.removeAll(state)
  ),
);

export const usersesFeature = createFeature({
  name: usersesFeatureKey,
  reducer,
  extraSelectors: ({ selectUsersesState }) => ({
    ...adapter.getSelectors(selectUsersesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = usersesFeature;
