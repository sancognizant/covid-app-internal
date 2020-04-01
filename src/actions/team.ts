import { TeamActions, TeamAction, TeamList } from '../model';

export function setTeamList(teamList: TeamList): TeamAction {
  return {
    type: TeamActions.SET_TEAMLIST,
    payload: teamList
  }
}
