import {createAction, props} from '@ngrx/store';
import {User} from "../people.service";

export const select = createAction('[Users Component] Select', props<{ user: User }>());
