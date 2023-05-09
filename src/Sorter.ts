export interface Sortable {
    swap(leftIndex: number, rightIndex: number): void;
    compare(leftIndex: number, rightIndex: number): boolean;
    length: number;
}

export class Sorter {
    collection: Sortable;

    constructor(collection: Sortable) {
        this.collection = collection;
    }

    sort(): void {
        const length = this.collection.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
