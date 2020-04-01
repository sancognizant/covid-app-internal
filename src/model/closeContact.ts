export interface CC {
  closeContact: boolean;
}

export enum CCActions {
  TOGGLE_CC = 'TOGGLE_CC'
}

interface CCActionType<T, P> {
  type: T;
  payload: P;
}

export type CCAction =
  | CCActionType<typeof CCActions.TOGGLE_CC, CC>;
