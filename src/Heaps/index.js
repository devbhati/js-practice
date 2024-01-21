import { MinHeap } from "./MinHeap";
import { MaxHeap } from "./MaxHeap";


let maxHeap = new MaxHeap();
maxHeap.add(5);
maxHeap.add(8);
maxHeap.add(9);
maxHeap.add(1);
console.log(maxHeap.peek());
console.log(maxHeap.poll());
maxHeap.add(11);
console.log(maxHeap.poll());
console.log(maxHeap.values);
console.log(maxHeap.poll());