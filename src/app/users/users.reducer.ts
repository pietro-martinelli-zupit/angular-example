import { createReducer, on } from '@ngrx/store';
import { select } from './users.actions';
import { User } from '../people.service'

export interface State {
  selectedUser: User | null
}

export const initialState : State = { selectedUser: null}

export const usersReducer = createReducer(
  initialState,
  on(select, (state, { user}) => ({ selectedUser: user}) ),
);
