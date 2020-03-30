export interface IEMployee {
	empId: number;
	lastName: string;
	firstName: string;
	department: string;
	acctName: string;
}

export enum EmployeeActions {
	ADD_EMPLOYEE = "ADD_EMPLOYEE",
	DELETE_EMPLOYEE = "DELETE_EMPLOYEE",
	UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE",
	DISPLAY_EMPLOYEE = "DISPLAY_EMPLOYEE",
}

interface employeeActionType<T, P> {
	type: T;
	payload: P;
}

export type EmployeeAction =
	| employeeActionType<typeof EmployeeActions.ADD_EMPLOYEE, IEMployee>
	| employeeActionType<typeof EmployeeActions.DELETE_EMPLOYEE, number>
	| employeeActionType<typeof EmployeeActions.UPDATE_EMPLOYEE, number>
	| employeeActionType<typeof EmployeeActions.DISPLAY_EMPLOYEE, string>;
