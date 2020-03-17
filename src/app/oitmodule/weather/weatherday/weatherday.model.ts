export class weatherdayModel {
    constructor(
        public day?: string,
        public urlIcon?:string,
        public minDeg?:string,
        public maxDeg?:string
    ) {
        this.day = day;
        this.urlIcon = urlIcon;
        this.minDeg = minDeg;
        this.maxDeg = maxDeg;
    }
}