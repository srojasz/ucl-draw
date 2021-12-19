import Team from "../domain/interfaces/Team.interface";
import Stage from "../domain/Stage.enum";

const getRandomElement = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const shuffle = <T>(data: T[]) => {
  return data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const getTwoRandomTeams = (teams: Team[]): Team[] => {
  const shuffledTeams = shuffle(teams);
  return [shuffledTeams[0], shuffledTeams[1]];
}
  
export const getTwoRivalsByStage = (teams: Team[], stage: Stage): Team[] => {
  if (stage !== Stage.ROUND_OF_16) {
    return getTwoRandomTeams(teams)
  }
  
  const firstTeam = teams[getRandomElement(0, teams.length)];
  const validRivals = teams.filter(team =>
    team.id !== firstTeam.id &&
    team.country !== firstTeam.country &&
    team.position !== firstTeam.position &&
    team.group !== firstTeam.group);
  
  const secondTeam = validRivals[getRandomElement(0, validRivals.length)]

  return !!firstTeam && !!secondTeam ? [firstTeam, secondTeam] : [];
};