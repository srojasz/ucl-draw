import Team from "../domain/interfaces/Team.interface";
import Stage from "../domain/Stage.enum";
import { getTwoRivalsByStage } from "./businessLogic";

describe("Get two random teams function", () => {
    const teams: Team[] = [
        {
            id: 1,
            name: "Man City",
            group: "A",
            position: 2,
            country: "UK"
        },
        {
            id: 2,
            name: "PSG",
            group: "A",
            position: 1,
            country: "FR"
        },
        {
            id: 3,
            name: "Liverpool",
            group: "B",
            position: 2,
            country: "UK"
        },
    ];
  
  it("it should not give us two teams that has the same country", () => {
    expect(getTwoRivalsByStage(teams, Stage.ROUND_OF_16)).not.toBe([teams[0], teams[2]]);
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRivalsByStage(teams, Stage.ROUND_OF_16)).not.toBe([teams[0], teams[1]]);    
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRivalsByStage(teams, Stage.ROUND_OF_16)).not.toBe([]);    
  });
  it("it should give us an empty arrat when all teams has the same group", () => {
    const fakeTeams: Team[] = [
      {
        id: 1,
        name: "Man City",
        group: "A",
        position: 1,
        country: "UK"
      },
      {
        id: 2,
        name: "PSG",
        group: "A",
        position: 2,
        country: "FR"
      },
      {
        id: 3,
        name: "Liverpool",
        group: "A",
        position: 2,
        country: "UK"
      },
    ]

    expect(getTwoRivalsByStage(fakeTeams, Stage.ROUND_OF_16)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same country", () => {
    const fakeTeams: Team[] = [
      {
        id: 1,
        name: "Man City",
        group: "C",
        position: 1,
        country: "UK"
      },
      {
        id: 2,
        name: "PSG",
        group: "A",
        position: 2,
        country: "UK"
      },
      {
        id: 3,
        name: "Liverpool",
        group: "A",
        position: 2,
        country: "UK"
      },
    ]

    expect(getTwoRivalsByStage(fakeTeams, Stage.ROUND_OF_16)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same id", () => {
    const fakeTeams: Team[] = [
      {
        id: 1,
        name: "Man City",
        group: "A",
        position: 1,
        country: "UK"
      },
      {
        id: 1,
        name: "Man City",
        group: "A",
        position: 2,
        country: "FR"
      },
      {
        id: 1,
        name: "Man City",
        group: "A",
        position: 1,
        country: "UK"
      },
    ]

    expect(getTwoRivalsByStage(fakeTeams, Stage.ROUND_OF_16)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same id", () => {
    const fakeTeams: Team[] = [
      {
        id: 1,
        name: "Man City",
        group: "A",
        position: 1,
        country: "UK"
      },
      {
        id: 1,
        name: "Man City",
        group: "B",
        position: 1,
        country: "FR"
      },
      {
        id: 1,
        name: "Man City",
        group: "C",
        position: 1,
        country: "UK"
      },
    ]

    expect(getTwoRivalsByStage(fakeTeams, Stage.ROUND_OF_16)).toStrictEqual([]);
  });
});