import { CCActions, CCAction, CC } from '../model';
import createReducer from './createReducer';

export const closeContact = createReducer<CC[]>([], {
  [CCActions.TOGGLE_CC](state: CC[], actions: CCAction) {
    return actions.payload;
  }
})
