const LEFT = 0;
const RIGHT = 1;

class Tree {
  constructor(val) {
    this.data = val;
    this.children = []; // this.descendants = []
    this.parent = null;
  }

  getLeft() {
    return this.children[LEFT];
  }

  getRight() {
    return this.children[RIGHT];
  }

  setLeft(node) {
    this.children[LEFT] = node;

    if (node) {
      this.parent = node;
    }
  }

  setRight(node) {
    this.children[RIGHT] = node;

    if (node) {
      this.parent = node;
    }
  }
}

let root = new Tree("A");
