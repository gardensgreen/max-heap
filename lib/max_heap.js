class MaxHeap {
    constructor() {
        this.store = [null];
    }
    insert(val) {
        this.store.push(val);
        this.siftUp(this.store.length - 1);
    }
    siftUp(i) {
        if (i === 1) return;
        const parentIdx = Math.floor(i / 2);
        const parentValue = this.store[parentIdx];
        const childValue = this.store[i];
        if (childValue > parentValue) {
            this.swap(this.store, parentIdx, i);
            this.siftUp(parentIdx);
        }
    }
    deleteMax() {}
    siftDown() {}
    swap() {}
    buildHeap() {}
}

module.exports = {
    MaxHeap,
};
