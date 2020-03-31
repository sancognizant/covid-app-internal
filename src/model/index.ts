import { TodoAction } from './todo';
import { EmployeeAction } from './employee';

export * from './todo';

export * from './employee';

/* type here refers to either the TODO object or the Employee object.
    Both object structure / interface in different files 
*/
export type Action = TodoAction | EmployeeAction;
