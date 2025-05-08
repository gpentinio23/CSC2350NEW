/**
 * Iterator for arrays.
 */
class ArrayIterator<T> {
    private index = 0;

    constructor(private arr: T[]) { }

    /**
     * Returns next element and advances iterator.
     */
    next(): { value: T | undefined; done: boolean } {
        if (this.index < this.arr.length) {
            return { value: this.arr[this.index++], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}



export default ArrayIterator