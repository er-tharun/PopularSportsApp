export class Sport {
    id:number;
    name:string;
    description:string;
    isActive:boolean;
    constructor() {
        this.id = 0;
        this.name = this.description = "";
        this.isActive = false;
    }
}