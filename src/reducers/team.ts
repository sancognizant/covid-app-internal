import { TeamActions, TeamAction, TeamList, CC } from '../model';
import createReducer from './createReducer';

export const teamList = createReducer<TeamList[]>([], {
  [TeamActions.SET_TEAMLIST](state: TeamList[], actions: TeamAction) {
    return actions.payload;
  }
});
