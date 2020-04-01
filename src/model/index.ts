import { EmployeeAction } from './employee';
import { SearchBarAction } from './searchBar';

export * from './employee';

export * from './searchBar';

export type Action = EmployeeAction | SearchBarAction;
