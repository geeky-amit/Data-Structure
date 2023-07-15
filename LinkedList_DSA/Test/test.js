let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(self) {
    this.head = null;
  }

  push(newValue) {
    let newNode = new Node(newValue);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  insertAtStart(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertAtEnd(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }
  makeListAndPrint(self) {
    //   WRITE CODE HERE
    newList(this.head);
  }
}

function newList(head) {
  let curr = head;
  //console.log(curr.data);
  let ind = head.next;
  let list = new LinkedList();
  if (curr === null) return;

  while (ind !== null) {
    console.log(ind.data, curr.data);
    if (ind.data === 0) {
      list.insertAtStart(curr.data);
      curr = ind.next;
      ind = curr.next;
    }
    if (ind.data === 1) {
      list.insertAtEnd(curr.data);
      curr = ind.next;
      ind = curr.next;
    }
    if (ind === null) break;
  }
  let temp = list.head;
  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}
function read_list_input() {
  let values = readLine().split(" ");
  let linkedList = new LinkedList();
  for (val of values) {
    linkedList.push(val);
  }
  return linkedList;
}
let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
  let linkedList = read_list_input();
  linkedList.makeListAndPrint();
}
