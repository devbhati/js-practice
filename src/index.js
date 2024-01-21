const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');


// Generating the PQ from an array and comparator function
const numbers = [3, -2, 5, 0, -1, -5, 4];
const mpq = PriorityQueue.fromArray(numbers, (a, b) => b-a);
console.log(mpq.toArray());
//   console.log(mpq.dequeue());


//Generating the PQ of objects with comparator on a property
const bidsArray = [{value: 2, kk: 2}, {value: 4, kk: 1}, {value: 1, kk: 5}, {value: 7, kk: 4}];

// const bidsQueue = PriorityQueue.fromArray(bidsArray, (bid1, bid2) => bid1.value - bid2.value);
const bidsQueue = MinPriorityQueue.fromArray(bidsArray, (bid) => bid.value);

console.log(bidsQueue.toArray());
// console.log(bidsQueue.dequeue());
