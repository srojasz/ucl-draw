import Team from "../interfaces/Team.interface";

const getRandomElement = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
export const getTwoRivals = (teams: Team[]): Team[] => {
  const firstTeam = teams[getRandomElement(0, teams.length)];
  const validRivals = teams.filter(team =>
    team.id !== firstTeam.id &&
    team.country !== firstTeam.country &&
    team.position !== firstTeam.position &&
    team.group !== firstTeam.group);
  
  const secondTeam = validRivals[getRandomElement(0, validRivals.length)]

  return !!firstTeam && !!secondTeam ? [firstTeam, secondTeam] : [];
};