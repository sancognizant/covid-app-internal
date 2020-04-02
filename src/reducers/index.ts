import { History } from 'history';
import { combineReducers } from 'redux';
import { IEmployee, SearchBar, TeamList, CC } from '../model';
import * as employeeReducer from './employee';
import * as searchBarReducer from './searchBar';
import * as teamReducer from './team';
import * as closeContactReducer from './closeContact';

export interface RootState {
  employeeList: IEmployee[];
  searchBar: SearchBar[];
  teamList: TeamList[];
  closeContact: CC[];
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer,
    ...searchBarReducer,
    ...teamReducer,
    ...closeContactReducer
  });
