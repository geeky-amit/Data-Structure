class BinaryTree {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  setLeft(node) {
    this.left = node;

    if (node) {
      this.parent = node;
    }
  }

  setRight(node) {
    this.right = node;

    if (node) {
      this.parent = node;
    }
  }
}

let root = new BinaryTree("A");

root.setLeft(new BinaryTree("B"));
root.setRight(new BinaryTree("C"));

let rootLeft = root.getLeft();
let rootRight = root.getRight();

rootLeft.setLeft(new BinaryTree("D"));
rootLeft.setRight(new BinaryTree("E"));

let rootLeftLeft = rootLeft.getLeft();
let rootRightRight = rootLeft.getRight();

rootRightRight.setRight(new BinaryTree("F"));
rootLeftLeft.setLeft(new BinaryTree("K"));

let ans = [];

function PreOrder(root) {
  if (root === null) {
    return;
  }
  ans.push(root.data);
  PreOrder(root.left);
  PreOrder(root.right);
}
PreOrder(root);
//console.log("PreOrder : ", ans);
ans = [];
function InOrder(root) {
  if (root === null) {
    return;
  }

  InOrder(root.left);
  ans.push(root.data);
  InOrder(root.right);
}
InOrder(root);
//console.log("InOrder : ", ans);
ans = [];
function PostOrder(root) {
  if (root === null) {
    return;
  }

  PostOrder(root.left);
  PostOrder(root.right);
  ans.push(root.data);
}
PostOrder(root);
//console.log("PostOrder : ", ans);

function heightOfTree(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  const height_left_subtree = heightOfTree(root.left);
  const height_right_subtree = heightOfTree(root.right);
  let max_height = Math.max(height_left_subtree, height_right_subtree);

  return max_height + 1;
}

//console.log(heightOfTree(root));

function mirrorTree(root) {
  if (root === null) {
    return null;
  }

  const left_subtree = mirrorTree(root.left);
  const right_subtree = mirrorTree(root.right);

  root.left = right_subtree;
  root.right = left_subtree;

  return root;
}

function isSymmetric(left, right) {
  if (left === null && right === null) {
    return true;
  }

  if (left !== null && right !== null) {
    return (
      isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
    );
  }

  return false;
}

function identicalTree(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 !== null && tree2 !== null) {
    return (
      tree1.data === tree2.data &&
      identicalTree(tree1.left, tree2.left) &&
      identicalTree(tree1.right, tree2.right)
    );
  }

  return false; // one is null and other is not
}

function getSum(root) {
  if (root === null) return 0;

  return getSum(root.left) + root.data + getSum(root.right);
}

function isSumTree(root) {
  if (root === null) return true;

  if (root.left === null && root.right === null) return true;

  let leftSum = getSum(root.left);
  let rightSum = getSum(root.right);

  if (
    root.data === leftSum + rightSum &&
    isSumTree(root.left) &&
    isSumTree(root.right)
  ) {
    return true;
  }

  return false;
}
