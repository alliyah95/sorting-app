// NOT NEEDED ANYMORE AFTER MAKING AN ABSTRACT CLASS
// export interface Sortable {
//     swap(leftIndex: number, rightIndex: number): void;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     length: number;
// }

export abstract class Sorter {
    // these are methods and a property that we expect our children classes
    // to implement in the future
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    // this should be a getter in the child class, but when defining it in an
    // abstract class, we define it as if it's a variable
    abstract length: number;

    sort(): void {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
