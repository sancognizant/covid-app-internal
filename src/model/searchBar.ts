export interface SearchBar {
  searchEmpId: string;
}

export enum SearchBarActions {
  SET_SEARCH_EMP_ID = 'SET_SEARCH_EMP_ID'
}

interface SearchBarActionType<T, P> {
  type: T;
  payload: P;
}

export type SearchBarAction =
  | SearchBarActionType<typeof SearchBarActions.SET_SEARCH_EMP_ID, SearchBar>;
