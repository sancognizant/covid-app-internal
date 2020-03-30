export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export enum TodoActions {
	ADD_TODO = "ADD_TODO",
	DELETE_TODO = "DELETE_TODO",
	COMPLETE_TODO = "COMPLETE_TODO",
	UNCOMPLETE_TODO = "UNCOMPLETE_TODO",
}

interface ActionType<T, P> {
	type: T;
	payload: P;
}

export type TodoAction =
	| ActionType<typeof TodoActions.ADD_TODO, Todo>
	| ActionType<typeof TodoActions.COMPLETE_TODO, number>
	| ActionType<typeof TodoActions.UNCOMPLETE_TODO, number>
	| ActionType<typeof TodoActions.DELETE_TODO, number>;
