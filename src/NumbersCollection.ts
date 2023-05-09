import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
    data: number[];

    constructor(data: number[]) {
        this.data = data;
    }

    // is the same as:
    // constructor(public data: number[]){}

    // when calling this, we treat it as if length is a property
    // so we can use it as: collection.length
    // this is essentially a property and not a method
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
