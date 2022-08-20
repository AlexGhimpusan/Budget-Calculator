export class Value {
    constructor(
        public amount: number,
        public description: string
    ) { }

    positive() {
        return (this.amount > 0);
    }
}
