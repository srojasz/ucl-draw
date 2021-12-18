import { getTwoRivals } from "./businessLogic";

describe("Get two random teams function", () => {
    const teams = [
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
            group: "B",
            position: 3,
            country: "UK"
        },
    ];

  
  it("it should not give us two teams that has the same country", () => {
    expect(getTwoRivals(teams)).not.toBe([teams[0], teams[2]]);
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRivals(teams)).not.toBe([teams[0], teams[1]]);    
  });
  it("it should not give us two teams that has the same group", () => {
    expect(getTwoRivals(teams)).not.toBe([]);    
  });
  it("it should give us an empty arrat when all teams has the same group", () => {
    const fakeTeams = [
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
        position: 3,
        country: "UK"
      },
    ]

    expect(getTwoRivals(fakeTeams)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same country", () => {
    const fakeTeams = [
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
        position: 3,
        country: "UK"
      },
    ]

    expect(getTwoRivals(fakeTeams)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same id", () => {
    const fakeTeams = [
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
        position: 3,
        country: "UK"
      },
    ]

    expect(getTwoRivals(fakeTeams)).toStrictEqual([]);
  });
  it("it should give us an empty arrat when all teams has the same id", () => {
    const fakeTeams = [
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

    expect(getTwoRivals(fakeTeams)).toStrictEqual([]);
  });
});