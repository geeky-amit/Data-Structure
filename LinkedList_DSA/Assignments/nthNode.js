let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getElementAt(qIndex, listHead) {
  let count = 1;
  let flag = true;
  let temp = listHead;
  while (temp !== null) {
    if (count === qIndex) {
      flag = false;
      return temp.data;
    }
    count++;
    temp = temp.next;
  }

  if (flag) return -1;
}

let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
  let listElements = readLine().split(" ");
  let index = parseInt(readLine());
  let head = null;
  if (listElements.length > 0) {
    head = new Node(parseInt(listElements[0]));
    let currNode = head;
    for (let j = 1; j < listElements.length; ++j) {
      currNode.next = new Node(parseInt(listElements[j]));
      currNode = currNode.next;
    }
  }
  console.log(getElementAt(index, head));
}
