import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


import { User } from '../../../auth/interfaces/User';

export const UsersActions = createActionGroup({
  source: 'Users/API',
  events: {
    'Load Userss': props<{ userss: User[] }>(),
    'Add Users': props<{ users: User }>(),
    'Upsert Users': props<{ users: User }>(),
    'Add Userss': props<{ userss: User[] }>(),
    'Upsert Userss': props<{ userss: User[] }>(),
    'Update Users': props<{ users: Update<User> }>(),
    'Update Userss': props<{ userss: Update<User>[] }>(),
    'Delete Users': props<{ id: string }>(),
    'Delete Userss': props<{ ids: string[] }>(),
    'Clear Userss': emptyProps(),
  }
});
