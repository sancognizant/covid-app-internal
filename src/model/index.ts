import { TodoAction } from './todo';
import { EmployeeAction } from './employee';

export * from './todo';

export * from './employee';

export type Action = TodoAction | EmployeeAction;
