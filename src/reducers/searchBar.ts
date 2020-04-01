import { SearchBarAction, SearchBarActions, SearchBar } from '../model';
import createReducer from './createReducer';

export const searchEmpId = createReducer<SearchBar[]>([], {
  [SearchBarActions.SET_SEARCH_EMP_ID](state: SearchBar[], action: SearchBarAction) {
    return action.payload;
  }
});
