import { Team } from "./models";

export const findValidRivals = (team: Team, teams: Team[]): Team[] => {
  return teams.filter(({ name, group, country }) => {
    return !(
      name === team.name ||
      group === team.group ||
      country === team.country
    );
  });
};
