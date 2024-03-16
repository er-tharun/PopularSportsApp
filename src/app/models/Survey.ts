import { Sport } from './Sport';
export class Survey {
    id:number;
    sport:Sport;
    countOfVotes:number;

    constructor() {
        this.id = this.countOfVotes = 0;
        this.sport = new Sport();
    }
}