class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtStart(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      curr.prev = node;
      node.next = curr;
      this.head = node;
    }
  }

  insertAtEnd(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
      node.prev = curr;
    }
  }

  insertAtPos(value, pos) {
    let node = new Node(value);
    let curr = this.head;
    if (pos === 0) {
      curr.prev = node;
      node.next = curr;
      this.head = node;
    } else {
      while (pos > 1) {
        curr = curr.next;
        pos--;
      }
      let future = curr.next;
      curr.next = node;
      node.prev = curr;
      node.next = future;
      future.prev = node;
    }
  }

  deleteAtStart() {
    if (this.head === null) {
      return -1;
    } else {
      let curr = this.head;
      this.head = curr.next;
      this.head.prev = null;
      curr = null;
    }
  }
  deleteAtEnd() {
    if (this.head === null) {
      return -1;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      let prev = curr.prev;
      curr.prev = null;
      prev.next = null;
    }
  }
  deleteAtPos(pos) {
    if (this.head === null) {
      return -1;
    } else {
      let curr = this.head;
      while (pos > 1) {
        curr = curr.next;
        pos--;
      }
      let future = curr.next;
      curr.next = curr.next.next;
      curr.next.prev = curr;
      future.next = null;
      future.prev = null;
      future = null;
    }
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

let dll = new DoublyLinkedList();

// dll.insertAtStart("a");
// dll.insertAtStart("b");
// dll.insertAtStart("c");
// dll.insertAtStart("d");
// //dll.insertAtPos("e", 1);
// dll.deleteAtStart();
// dll.deleteAtEnd();

function findSumPair(head, sum) {
  let P = head;
  let Q = head;

  while (Q.next !== null) {
    Q = Q.next;
  }

  while (P.data < Q.data) {
    let s = P.data + Q.data;
    if (s === sum) {
      console.log(P.data, Q.data);
      return;
    } else if (s < sum) {
      P = P.next;
    } else {
      Q = Q.prev;
    }
  }
  return -1;
}

dll.insertAtStart(1);
dll.insertAtStart(2);
dll.insertAtStart(4);
dll.insertAtStart(5);
dll.insertAtStart(6);
dll.insertAtStart(7);
dll.insertAtStart(8);
dll.insertAtStart(9);
//dll.printList();

console.log(findSumPair(dll.head, 11));
