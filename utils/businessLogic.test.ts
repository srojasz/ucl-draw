import { getTwoRandomTeams } from "./businessLogic";

describe("Get two random teams function", () => {
    const teams = [
        {
            name: "Man City",
            group: "A",
            country: "UK"
        },
        {
            name: "PSG",
            group: "A",
            country: "FR"
        },
        {
            name: "Liverpool",
            group: "B",
            country: "UK"
        },
    ];

  
  it("it should not give us two teams that has the same country", () => {
    expect(getTwoRandomTeams(teams)).not.toBe([teams[0], teams[2]]);
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRandomTeams(teams)).not.toBe([teams[0], teams[1]]);    
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRandomTeams(teams)).not.toBe([]);    
  });
  it("it should give us an empty arrat when all teams has the same group", () => {
    const fakeTeams = [
      {
        name: "Man City",
        group: "A",
        country: "UK"
      },
      {
        name: "PSG",
        group: "A",
        country: "FR"
      },
      {
        name: "Liverpool",
        group: "A",
        country: "UK"
      },
    ]

    expect(getTwoRandomTeams(fakeTeams)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same country", () => {
    const fakeTeams = [
      {
        name: "Man City",
        group: "C",
        country: "UK"
      },
      {
        name: "PSG",
        group: "A",
        country: "UK"
      },
      {
        name: "Liverpool",
        group: "A",
        country: "UK"
      },
    ]

    expect(getTwoRandomTeams(fakeTeams)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same name", () => {
    const fakeTeams = [
      {
        name: "Man City",
        group: "A",
        country: "UK"
      },
      {
        name: "Man City",
        group: "A",
        country: "FR"
      },
      {
        name: "Man City",
        group: "A",
        country: "UK"
      },
    ]

    expect(getTwoRandomTeams(fakeTeams)).toStrictEqual([]);
  });
});