import { History } from 'history';
import { combineReducers } from 'redux';
import { IEmployee } from '../model';
import * as employeeReducer from './employee';

export interface RootState {
  employeeList: IEmployee[];
}

export default (history: History) =>
  combineReducers({
    ...employeeReducer
  });
