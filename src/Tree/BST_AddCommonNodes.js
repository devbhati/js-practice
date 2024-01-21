class Tree {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

var root1 = new Tree(5);
root1.left = new Tree(2);
root1.right = new Tree(8);
root1.left.right = new Tree(3);
root1.right.right = new Tree(15);
root1.right.right.left = new Tree(9);

var root2 = new Tree(7);
root2.left = new Tree(1);
root2.right = new Tree(10);
root2.left.right = new Tree(2);
root2.right.right = new Tree(15);
root2.right.right.left = new Tree(11);


function solve(A, B){
    var arrA = this.inOrder(A, []);
    var arrB = this.inOrder(B, []);
    var result = 0;
    var i = 0; var j = 0;
    while(i < arrA.length && j < arrB.length) {
        if(arrA[i] == arrB[j]) {
            result += arrA[i];
            i+=1; j+=1;
        }
        if(arrA[i] < arrB[j]) i+=1;
        if(arrA[i] > arrB[j]) j+=1;
    }
    return result;
}

function inOrder(A, result) {
    if(A==null) return null;
    this.inOrder(A.left, result);
    result.push(A.data);
    this.inOrder(A.right, result);
    return result;
}

console.log(solve(root1, root2));