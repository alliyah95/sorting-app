export class NumbersCollection {
    data: number[];

    constructor(data: number[]) {
        this.data = data;
    }

    // is the same as:
    // constructor(public data: number[]){}

    // when calling this, we treat it as if length is a property
    // so, collection.length
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
