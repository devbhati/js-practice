class Tree {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// var root1 = new Tree(1);
// root1.left = new Tree(2);
// root1.right = new Tree(3);
// root1.right.left = new Tree(4);
// root1.right.right = new Tree(5);

var root2 = new Tree(3);
root2.left = new Tree(2);
root2.right = new Tree(4);
root2.left.left = new Tree(3);


var serialize = function(root) {
  const preOrd = preOrder(root, []);
  const inOrd = inOrder(root, []);
  const result = preOrd.toString()+'='+inOrd.toString();
  return result;
};

var deserialize = function(data) {
  let [preStr, inStr] = data.split('=');
  
  let preArr = preStr.split(',');
  let inArr = inStr.split(',');
  
  preArr.forEach((element, index) => {
    preArr[index] = parseInt(element);
  });
  
  inArr.forEach((element, index) => {
    inArr[index] = parseInt(element);
  });
  
  let tree = buildTree(preArr, inArr);
  return tree;
};


console.log(serialize(root2));
console.log(deserialize('3,2,3,4=3,2,3,4'));



function preOrder(tree, result) {
  if(tree === null) return result;
  result.push(tree.val);
  if(tree.left) preOrder(tree.left, result);
  if(tree.right) preOrder(tree.right, result);
  return result;
}

function inOrder(tree, result) {
  if(tree === null) return result;
  if(tree.left) inOrder(tree.left, result);
  result.push(tree.val);
  if(tree.right) inOrder(tree.right, result);
  return result;
}


// console.log(preOrder(root1, []));
// console.log(inOrder(root1, []));

// console.log(buildTree(preOrder(root1, []), inOrder(root1, [])));


function buildTree(preOrder, inOrder) {
  if(!preOrder.length || !inOrder.length) return null;
  const mid = inOrder.indexOf(preOrder[0]);
  const node = new Tree(preOrder[0]);
  node.left = buildTree(preOrder.slice(1, mid+1), inOrder.slice(0, mid));
  node.right = buildTree(preOrder.slice(mid+1), inOrder.slice(mid+1));
  return node;
}

























// const buildTree = (preorder, inorder) => {
//   if (!preorder.length || !inorder.length) return null;
  
//   let root = new Tree(preorder[0]);
//   let mid = inorder.indexOf(preorder[0]);
//   root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//   root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//   return root;
// };

// console.log(buildTree([1,2,3,4,5], [3,2,4,1,5]));

//-------------------------------


const maxPathSum = (root) => {
    let max = -Infinity;
    traverse(root);
    function traverse(node) {
      if(node === null) return 0;
      let left = Math.max(traverse(node.left), 0);
      let right = Math.max(traverse(node.right), 0);
      max = Math.max(max, node.val + left + right);
      return node.val + Math.max(left, right);
    }
    return max;
};

// console.log(maxPathSum(root1));