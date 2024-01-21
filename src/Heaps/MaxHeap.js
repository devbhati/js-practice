export class MaxHeap {
    constructor() {
        this.values = [];
    }
    getLeftChildIndex(index) { return 2*index + 1 };
    getRightChildIndex(index) { return 2*index + 2 };
    getParentChildIndex(index) { return Math.floor((index-1)/2)};

    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.values.length };
    hasRightChild(index) { return this.getRightChildIndex(index) < this.values.length };
    hasParent(index) { return this.getParentChildIndex(index) >= 0 };

    swap(index1, index2) {
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    peek() { return this.values[0] || null };

    poll() {
        if(!this.peek()) return null;
        let item = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.values.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.values.length- 1;
        let item = this.values[index];
        while(index > 0 && item > this.values[this.getParentChildIndex(index)]) {
            this.swap(index, this.getParentChildIndex(index));
            index = this.getParentChildIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while(this.hasLeftChild(index)) {
            let bigChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.values[this.getRightChildIndex(index)] > this.values[this.getLeftChildIndex(index)]) {
                bigChildIndex = this.getRightChildIndex(index);
            }
            if(this.values[index] < this.values[bigChildIndex]) {
                break;
            } else {
                this.swap(index, bigChildIndex);   
            }
            index = bigChildIndex;
        }   
    }
}


export class MaxHeap2 {
    constructor() {
        this.values = [];
    }
    
    parent(index) {
        return Math.floor((index - 1) / 2);
    }
    
    leftChild(index) {
        return (index * 2) + 1;
    }
    
    rightChild(index) {
        return (index * 2) + 2;
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    isLeaf(index) { // Second half of the array is all leaf nodes.
        return (
            index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
        )
    }

    add(element) { // add and either heapifyUp or heapifyDown.
        this.values.push(element);
        this.heapifyUp(this.values.length - 1);
    }

    addDown(element) { // add and either heapifyUp or heapifyDown.
        this.values.unshift(element);
        this.heapifyDown(0);
    }

    heapifyUp(index) { // From bottom, the node is percolated up if parentNode is smaller than node
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);
    
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    heapifyDown(index) {
        if (!this.isLeaf(index)) {
            let leftChildIndex = this.leftChild(index);
            let rightChildIndex = this.rightChild(index);
            let largestIndex = index;
            if (this.values[leftChildIndex] > this.values[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            if (this.values[rightChildIndex] >= this.values[largestIndex]) {
                largestIndex = rightChildIndex;
            }
            if (largestIndex !== index) {
                this.swap(index, largestIndex);
                this.heapifyDown(largestIndex);
            }
        }
    }

    extractMax() {
        if (this.values.length < 1) return 'Empty Heap';
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.heapifyDown(0);
        return max;
    }

    buildHeap(array) {
        this.values = array;
        for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }
    
}

let maxHeap = new MaxHeap();
maxHeap.buildHeap([5,8,9,1,11]);
// maxHeap.add(5);
// maxHeap.add(8);
// maxHeap.add(9);
// maxHeap.add(1);
// // console.log(maxHeap.peek());
// console.log(maxHeap.extractMax());
// maxHeap.add(11);
// console.log(maxHeap.extractMax());
// console.log(maxHeap.values);
// console.log(maxHeap.extractMax());

// function solve (A) {
//     var heap = new MaxHeap();
//     var result = [-1, -1,];
//     for(var i = 2; i < A.length; i++) {
//         for(var j = 0; j <= i; j++) {
//             heap.addUp(A[j]);
//         }
//         var a1 = heap.extractMax();
//         var a2 = heap.extractMax();
//         var a3 = heap.extractMax();
//         result.push(a1 * a2 * a3);
//         heap.addUp(a1); heap.addUp(a2); heap.addUp(a3);
//     }
//     return result;
// }

// console.log(solve([1, 2, 3, 4, 5]));