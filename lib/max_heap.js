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
    deleteMax() {
        const max = this.store[1];
        this.store[1] = this.store.pop();
        this.siftDown(1);
        return max;

    } 
    siftDown(idx) {
        const leftIdx = idx * 2;
        const rightIdx = idx * 2 + 1;
        const leftValue = this.store[leftIdx];
        const rightValue = this.store[rightIdx];
        const value = this.store[idx];
        if(leftValue === undefined) leftValue === -Infinity;
        if(rightValue === undefined) rightValue === -Infinity; 
        if(value > leftValue && value > rightValue)return;
        let swapIdx;
        if(leftValue > rightValue){
            swapIdx = leftIdx;
        }else{
            swapIdx = rightIdx;
        }
        this.swap(this.store, idx, swapIdx);
        this.siftDown(swapIdx);
    }
    swap() {}
    buildHeap() {}
}

module.exports = {
    MaxHeap,
};
