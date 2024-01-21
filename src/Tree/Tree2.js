class Tree {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/*
Proper binary tree - has 0 or 2 nodes at all levels
Complete binary tree - all levels are complete and if not the nodes are to the left
Perfect binary tree - all levels full
*/

var root1 = new Tree(1);
root1.left = new Tree(2);
root1.right = new Tree(3);
root1.right.left = new Tree(4);
root1.right.right = new Tree(5);

var root2 = new Tree(1);
root2.left = new Tree(3);
root2.right = new Tree(2);
root2.left.left = new Tree(5);
root2.left.right = new Tree(4);

/* Q1 - Height of Binary Tree
Time complexity is O(n) where n is number of nodes */
function heightOfBinaryTree(t) {
    if(t==null) return -1;
    return Math.max(heightOfBinaryTree(t.left), heightOfBinaryTree(t.right))+1;
}

/* Q2 - Given two trees, return true if they are mirror images of each other
*/
function checkIfMirrorImages(t1, t2) { 
    if(t1 == null && t2 == null) return true;
    if(t1 == null || t2 == null) return false;
    if(t1.val !== t2.val) return false;
    return checkIfMirrorImages(t1.left, t2.right) && checkIfMirrorImages(t1.right, t2.left);
}

/* Q3 - Given a perfect binary tree, where N is the number of nodes and H is the height 
    of tree, Derive a relation between N and H
    H = log(N);  
    H = log2(N+1) - 1;
*/


/* Inorder traversal - with recursion
*/
function inorderTraversalRec(t, result) {
    // result.push(t.val);
    if(t.left) inorderTraversalRec(t.left, result);
    // result.push(t.val);
    if(t.right) inorderTraversalRec(t.right, result);
    result.push(t.val);
    return result;
}

/* Inorder traversal - without recursion
*/
function inorderTraversal(t) {
    var current = t;
    var stack = [];
    var result = [];
    while(current !== null || stack.length > 0) {
        //Reach to the left most node and enter all passing nodes into stack
        while(current !== null) {
            // result.push(current.val);
            stack.push(current);
            current = current.left;   
        }
        //once the current is null as in, when we reach the left most node
        //take it out
        
        current = stack.pop();
        result.push(current.val);
        // result.push(current.val);
        //now put the right node of it into the stack so that we can traverse the right side as well
        current = current.right;
    }
    return result;
}

console.log(inorderTraversal(root1));
console.log(inorderTraversalRec(root1, []));

/* Level order traversal of a tree
*/
function levelOrderTraversal(t) {
    var height = heightOfBinaryTree(t);
    var result = [];
    for(var i = 0; i <= height; i++) {
        subset = printCurrentLevel(t, i, subset = [])
        result.push(subset);
    }
    return result;
    
}
/* This function prints all the nodes at a given level */
function printCurrentLevel(root, level, subset) {
    if(root == null) return;
    if(level == 0) subset.push(root.val);
    else if(level > 0) {
        printCurrentLevel(root.left, level - 1, subset);
        printCurrentLevel(root.right, level - 1, subset);
    }
    return subset;
}


var min = 0;
var max = 0;
/*This function returns the left most and right most co ordinates of a tree*/
function getMinMaxDistance(node, hd) {
    if(node == null) return;
    min = Math.min(min, hd);
    max = Math.max(max, hd);
    getMinMaxDistance(node.left, hd - 1);
    getMinMaxDistance(node.right, hd + 1);
    return [min, max]
}


/* Vertical Order Map Store
*/
function verticalOrderMapStore(t, hd, obj) {
    if(obj[hd] == null) {
        obj[hd] = [];
        obj[hd].push(t.val);
    } else {
        obj[hd].push(t.val);
    }
    if(t.left) verticalOrderMapStore(t.left, hd-1, obj);
    if(t.right) verticalOrderMapStore(t.right, hd+1, obj);
    return obj;
}

/* Print vertical order of a tree
*/
function verticalOrderTraversal(t) {
    var obj = verticalOrderMapStore(t, 0, {});
    var keys = Object.keys(obj);
    keys.forEach((key)=>parseInt(key));
    keys.sort();
    var result = [];
    for(var i = 0; i < keys.length; i++) {
        result.push(obj[keys[i]]);
    }
    return result;
}

/* Level Order Map Store
*/
function levelOrderMapStore(t, hd, obj) {
    if(t==null) {
        if(obj[hd] == null) {
            obj[hd] = [];
            obj[hd].push(-1);
            return;
        } else {
            obj[hd].push(-1);
            return;
        }
    }
    if(obj[hd] == null) {
        obj[hd] = [];
        obj[hd].push(t.val);
    } else {
        obj[hd].push(t.val);
    }
    if(t) levelOrderMapStore(t.left, hd+1, obj);
    
    if(t) levelOrderMapStore(t.right, hd+1, obj);
    var result = [];
    Object.keys(obj).forEach(key=>{
        result.push(obj[key])
    });
    return result;
}

/* Level order using a map/object
*/
function levelOrderTraversalMap(t) {
    var obj = levelOrderMapStore(t, 0, {});
    return obj;
}

var root3 = new Tree(1);
root3.left = new Tree(2);
root3.right = new Tree(3);
root3.left.left = new Tree(4);
root3.left.right = new Tree(5);

// console.log(levelOrderTraversalMap(root3));


function printName(name = "Raj") {
    console.log(name);
}


printName("Derive");


function preorderTraversal(A){
    var stack = [];
    var current = A;
    var result = [];
    while(current !== null || stack.length > 0) {
        if(current !== null) {
            stack.push(current);
            current = current.left;  
        }

        if(current == null) {
            if(current.right == null) result.push(current.val);
            current = stack.pop();
            current = current.right;
        }
    }
    return result;  
}

console.log(preorderTraversal(root1));




/*
1.1 Create an empty stack
2.1 Do following while root is not NULL
    a) Push root's right child and then root to stack.
    b) Set root as root's left child.
2.2 Pop an item from stack and set it as root.
    a) If the popped item has a right child and the right child 
       is at top of stack, then remove the right child from stack,
       push the root back and set root as root's right child.
    b) Else print root's data and set root as NULL.
2.3 Repeat steps 2.1 and 2.2 while stack is not empty.
*/

function postOrder(A) {
    var result = [];
    var stack = [];
    var root = A;
    while(stack.length > 0 || root !== null) {
        if(root !== null) {
            stack.push(root.right);
            stack.push(root);
            root = root.left;
        } else {
            var ele = stack.pop();
            if(ele.right == stack[stack.length - 1]) {
                stack.pop();
                stack.push(ele);
                root = ele.right;
            } else {
                result.push(ele.val);
            }
        }
    }
    return result;
}

console.log(postOrder(root1));