import { TodoAction } from "./todo";
import { EmployeeAction } from "./cdeEmployee";

export * from "./todo";

export * from "./cdeEmployee";

export type Action = TodoAction | EmployeeAction;
