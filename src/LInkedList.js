class LinkedList {
    constructor(val, next, random) {
        this.val = val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

let ll1 = new LinkedList(1);
ll1.next = new LinkedList(2);
ll1.next.next = new LinkedList(3);
ll1.next.next.next = new LinkedList(4);
ll1.next.next.next.next = new LinkedList(5);

let ll2 = new LinkedList(2);
ll2.next = new LinkedList(5);
ll2.next.next = new LinkedList(9);
ll2.next.next.next = new LinkedList(13);


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

let l1 = new LinkedList(9);
let l2 = new LinkedList(9);
let l3 = new LinkedList(9);
let l4 = new LinkedList(9);
let l5 = new LinkedList(9);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

let m1 = new LinkedList(9);
let m2 = new LinkedList(9);
let m3 = new LinkedList(9);
m1.next = m2;
m2.next = m3;

var addTwoNumbers = function(l1, l2) {
    let dummy = new LinkedList();
    let tail = dummy;
    let carry = 0;
    while(l1 || l2) {
        let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
        let temp;
        if(sum > 9) {
            temp = sum - 10;
        } else {
            temp = sum;
        }
        const node = new LinkedList(temp);
        tail.next = node;
        tail = tail.next;
        l1 = l1 && l1.next || null;
        l2 = l2 && l2.next || null;
        carry = (sum > 9) ? 1 : 0;
    }
    if(carry > 0) tail.next = new LinkedList(carry);
    return dummy.next;
};

console.log(addTwoNumbers(l1, m1));



var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break;
    }
    let slow2 = 0;
    while(true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if(slow === slow2) return slow;
    }
};

console.log(findDuplicate([5,3,1,6,3,4,2]));





/*
let l1 = new LinkedList(7);
let l2 = new LinkedList(13);
let l3 = new LinkedList(11);
let l4 = new LinkedList(10);
let l5 = new LinkedList(1);
l1.next = l2;
l1.random = null;
l2.next = l3;
l2.random = l1;
l3.next = l4;
l3.random = l5
l4.next = l5;
l4.random = l3;
l5.next = null;
l5.random = l1;

var copyRandomList = function(head) {
    var mapOldToCopy = new Map();
    mapOldToCopy.set(null, null);
    let curr = head;
    while(curr) {
        let newNode = new LinkedList(curr.val);
        // mapOldToCopy[curr] = newNode;
        mapOldToCopy.set(curr, newNode);
        curr = curr.next;
    }
    curr = head;
    while(curr) {
        // copy = mapOldToCopy[curr];
        copy = mapOldToCopy.get(curr);
        copy.next = mapOldToCopy.get(curr.next);
        copy.random = mapOldToCopy.get(curr.random);
        curr = curr.next;
    }
    return mapOldToCopy.get(head);
};

console.log(copyRandomList(l1));
*/

/*
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;
    while(head) {
        length++;
        head = head.next;
    }
    head = curr;
    let idxFromStart = length - n;
    if(idxFromStart < 1) {
        return curr.next;
    }
    while(idxFromStart > 1) {
        head = head.next;
        idxFromStart--;
    }
    if(head.next) head.next = head.next.next;
    else return null;
    return curr;
};
console.log(removeNthFromEnd(ll1, 2));
*/

/*
var reorderList = function(head) {
    let sl = head;
    let fa = head;
    while(fa.next) {
        sl = sl.next;
        fa = fa.next.next;
    }
    let right = sl.next;
    sl.next = null;
    right = reverse(right);
    let temp1; let temp2;
    let curr = head;
    while(right) {
        temp1 = head.next;
        temp2 = right.next;
        right.next = temp1;
        head.next = right;
        right = temp2;
        head = temp1;
    }
    return curr;
};

function reverse(head) {
    let prev = null;
    let next;
    while(head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

console.log(reorderList(ll1))
*/

/*
var mergeTwoLists = function(ll1, ll2) {
    let dummy = new LinkedList();
    let tail = dummy;
    while(ll1 && ll2) {
        if(ll1.val < ll2.val) {
            tail.next = ll1;
            ll1 = ll1.next;
        } else {
            tail.next = ll2;
            ll2 = ll2.next;
        }
        tail = tail.next;
    }
    if(ll1 === null) tail.next = ll2;
    else tail.next = ll1;
    return dummy.next;
};
console.log(mergeTwoLists(ll1, ll2));
*/

/*
var reverseList = function(head) {
    let prev = null;
    let next;
    while(head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
console.log(reverseList(ll1));
*/