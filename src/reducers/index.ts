import { History } from 'history';
import { combineReducers } from 'redux';
import { IEmployee, SearchBar } from '../model';
import * as employeeReducer from './employee';
import * as searchBarReducer from './searchBar';

export interface RootState {
  employeeList: IEmployee[];
  searchBar: SearchBar[];
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer,
    ...searchBarReducer
  });
