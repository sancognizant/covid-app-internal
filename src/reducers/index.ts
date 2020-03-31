import { History } from 'history';
import { combineReducers } from 'redux';
import { Todo, IEmployee } from '../model';
import * as todoReducer from './todo';
import * as employeeReducer from './employee';

export interface RootState {
  todoList: Todo[];
  employeeList: IEmployee[];
}

export default (history: History) =>
  combineReducers({
    ...todoReducer,
    ...employeeReducer
  });
