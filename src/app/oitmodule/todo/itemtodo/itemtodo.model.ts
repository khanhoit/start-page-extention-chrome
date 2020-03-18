export class ItemTodoModel{
    constructor(
        public isChecked?: boolean,
        public label?: string,
        public deleted?: boolean
    ) {
        this.isChecked = isChecked;
        this.label = label;
        this.deleted = deleted;
    }
}