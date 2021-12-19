import Team from "./interfaces/Team.interface";
import Stage from "./Stage.enum";

interface DrawParams {
    teams: Team[];
    stage: Stage
}

export default class Draw {
    teams: Team[];
    stage: Stage;

    constructor(params: DrawParams) {
        this.teams = params.teams;
        this.stage = params.stage;
    }
}