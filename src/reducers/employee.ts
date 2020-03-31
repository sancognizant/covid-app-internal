import { EmployeeAction, EmployeeActions, IEmployee } from '../model';
import createReducer from './createReducer';

export const employeeList = createReducer<IEmployee[]>([], {
  [EmployeeActions.ADD_EMPLOYEE](state: IEmployee[], action: EmployeeAction) {
    return [...state, action.payload];
  },
  [EmployeeActions.DELETE_EMPLOYEE](
    state: IEmployee[],
    action: EmployeeAction
  ) {
    // filtering employee not equal to the id
    console.log('Deleting ', action.payload);
    return state.filter(e => e.empId !== action.payload);
  }
  // [EmployeeActions.UPDATE_EMPLOYEE](
  // 	state: IEmployee[],
  // 	action: EmployeeAction
  // ) {
  // 	// search after todo item with the given id and set completed to false
  // 	return state.map(t =>
  // 		t.id === action.payload ? { ...t, completed: false } : t
  // 	);
  // },
  // [EmployeeActions.DISPLAY_EMPLOYEE](
  // 	state: IEMployee[],
  // 	action: EmployeeAction
  // ) {
  // 	// remove all todos with the given id
  // 	return state.filter(t => t.id !== action.payload);
  // },
});
