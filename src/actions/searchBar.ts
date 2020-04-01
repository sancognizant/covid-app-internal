import { SearchBarActions, SearchBarAction, SearchBar } from '../model';

export function setSearchEmpId(employeeId: SearchBar): SearchBarAction {
  return {
    type: SearchBarActions.SET_SEARCH_EMP_ID,
    payload: employeeId
  };
}
