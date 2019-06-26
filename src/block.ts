export default class Block {
    multiplier: number;
    contains: number;

    constructor(multiplier: number) {
        this.multiplier = multiplier;
        this.contains = 0;
    }

    getPlaceValue() {
        return this.multiplier * this.contains;
    }
}