export class MinHeap {
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
        while(index > 0 && item < this.values[this.getParentChildIndex(index)]) {
            this.swap(index, this.getParentChildIndex(index));
            index = this.getParentChildIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while(this.hasLeftChild(index)) {
            let smallChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.values[this.getRightChildIndex(index)] < this.values[this.getLeftChildIndex(index)]) {
                smallChildIndex = this.getRightChildIndex(index);
            }
            if(this.values[index] < this.values[smallChildIndex]) {
                break;
            } else {
                this.swap(index, smallChildIndex);   
            }
            index = smallChildIndex;
        }   
    }
}