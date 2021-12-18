import { findValidRivals } from "./draw";
import { Team } from "./models";
import teams from "./teams.json";

describe("Find valid rivals", () => {
  it("works", () => {
    expect(findValidRivals(teams[0] as Team, teams as Team[])).toEqual([
      {
        name: "Atlético Madrid",
        group: "B",
        country: "ES",
      },
      {
        name: "Ajax",
        group: "C",
        country: "NL",
      },
      {
        name: "Sporting",
        group: "C",
        country: "PT",
      },
      {
        name: "Real Madrid",
        group: "D",
        country: "ES",
      },
      {
        name: "Inter",
        group: "D",
        country: "IT",
      },
      {
        name: "Bayern",
        group: "E",
        country: "DE",
      },
      {
        name: "Benfica",
        group: "E",
        country: "PT",
      },

      {
        name: "Villareal",
        group: "F",
        country: "ES",
      },
      {
        name: "LOSC Lille",
        group: "G",
        country: "FR",
      },
      {
        name: "RB Salzburg",
        group: "G",
        country: "DE",
      },
      {
        name: "Juventus",
        group: "H",
        country: "IT",
      },
    ]);
  });
});
