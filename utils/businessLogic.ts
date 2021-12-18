import Team from "../interfaces/Team.interface";

const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  export const getTwoRandomTeams = (teams: Team[]): Team[] => {
    const firstTeam = teams[getRandomInt(0, teams.length)];
    const rivals = teams.filter(team =>
      team.id !== firstTeam.id &&
      team.country !== firstTeam.country &&
      team.group !== firstTeam.group);
    
    const secondTeam = rivals[getRandomInt(0, rivals.length)]
  
    return !!firstTeam && !!secondTeam ? [firstTeam, secondTeam] : [];
  };