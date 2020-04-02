import { EmployeeAction, EmployeeActions, IEmployee } from '../model';

export function addEmployee(employee: IEmployee): EmployeeAction {
  return {
    type: EmployeeActions.ADD_EMPLOYEE,
    payload: employee
  };
}

export function updateEmployee(employee: IEmployee): EmployeeAction {
  return {
    type: EmployeeActions.UPDATE_EMPLOYEE,
    payload: employee
  };
}

export function deleteEmployee(employeeId: string): EmployeeAction {
  console.log('Calling Action deleteEmployee ', employeeId);
  return {
    type: EmployeeActions.DELETE_EMPLOYEE,
    payload: employeeId
  };
}

export function displayEmployee(body: string): EmployeeAction {
  return {
    type: EmployeeActions.DISPLAY_EMPLOYEE,
    payload: body
  };
}
