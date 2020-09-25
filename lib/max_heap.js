class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(i) {
        return Math.floor(i / 2);
    }

    getLeftChild(i) {
        return Math.floor(i * 2);
    }
    getRightChild(i) {
        return Math.floor(i * 2 + 1);
    }
    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }
    siftUp(i) {
        if (i === 1) return;
        const parentIdx = Math.floor(i / 2);
        const parentValue = this.array[parentIdx];
        const childValue = this.array[i];
        if (childValue > parentValue) {
            this.swap(this.array, parentIdx, i);
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;

        const max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }
    siftDown(idx) {
        const leftIdx = idx * 2;
        const rightIdx = idx * 2 + 1;
        let leftValue = this.array[leftIdx];
        let rightValue = this.array[rightIdx];
        const value = this.array[idx];
        if (leftValue === undefined) leftValue = -Infinity;
        if (rightValue === undefined) rightValue = -Infinity;
        if (value > leftValue && value > rightValue) return;
        let swapIdx;
        if (leftValue > rightValue) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }
        this.swap(this.array, idx, swapIdx);
        this.siftDown(swapIdx);
    }
    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    buildHeap(arr) {
        arr.forEach((ele) => {
            this.insert(ele);
        });
    }
}

let heap1 = new MaxHeap();
heap1.array = [null, 27, 30, 40, 20, 25, 16];
heap1.siftDown(1);
console.log(heap1.array);

module.exports = {
    MaxHeap,
};
