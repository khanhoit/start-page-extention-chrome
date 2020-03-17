export class TimecurrentModel {
    constructor(
        public time?: string,
        public urlIcon?:string,
        public deg?:string,
    ) {
        this.time = time;
        this.urlIcon = urlIcon;
        this.deg = deg;
    }
}