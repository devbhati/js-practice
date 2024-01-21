class Node {
    constructor(item) {
       this.left = null;
       this.right = null;
       this.data = item;
    }
}
     
let root, min = 0, max = 0;
    
function findMinMax(node, hd) {
    if (node == null) return;

    if (hd < min) min = hd;
    else if (hd > max) max = hd;

    findMinMax(node.left, hd - 1);
    findMinMax(node.right, hd + 1);
}
    

function printVerticalLine(node, line_no, hd) {    
    if (node == null) return;

    if (hd == line_no) console.log(node.data + " ");

    printVerticalLine(node.left, line_no, hd - 1);
    printVerticalLine(node.right, line_no, hd + 1);
}
    
function verticalOrder(node) {
    findMinMax(node, 0);
    for (let line_no = min; line_no <= max; line_no++) {
        printVerticalLine(node, line_no, 0);
    }
}
     
/* Let us construct the tree shown in above diagram */
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);

console.log(verticalOrder(root));