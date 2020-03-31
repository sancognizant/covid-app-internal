export interface IEmployee {
  empId: string;
  lastName?: string;
  firstName?: string;
  department?: string;
  acctName?: string;
}

export enum EmployeeActions {
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
  DISPLAY_EMPLOYEE = 'DISPLAY_EMPLOYEE'
}

interface employeeActionType<T, P> {
  type: T;
  payload: P;
}

export type EmployeeAction =
  | employeeActionType<typeof EmployeeActions.ADD_EMPLOYEE, IEmployee>
  | employeeActionType<typeof EmployeeActions.DELETE_EMPLOYEE, string>
  | employeeActionType<typeof EmployeeActions.UPDATE_EMPLOYEE, IEmployee>
  | employeeActionType<typeof EmployeeActions.DISPLAY_EMPLOYEE, string>;
