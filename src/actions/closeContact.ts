import { CCActions, CCAction, CC } from '../model';

export function toggleCC(closeContact: CC): CCAction {
  return {
    type: CCActions.TOGGLE_CC,
    payload: closeContact
  }
}
