class Node {
  constructor(element) {
    this.data = element;
    this.next = null;

    // for doubly linkedlist
    // this.prev = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
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

  insertAtPos(value, pos) {
    let node = new Node(value);
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      let prev = null;
      while (pos > 0) {
        prev = curr;
        curr = curr.next;
        pos--;
      }
      node.next = curr;
      prev.next = node;
    }
  }

  deleteAtStart() {
    let curr = this.head;
    this.head = this.head.next;
    curr.next = null;
  }

  deleteAtEnd() {
    let curr = this.head;
    let prev = null;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  deleteAtPos(pos) {
    let curr = this.head;
    if (pos === 0) {
      this.head = this.head.next;
      curr.next = null;
    } else {
      let prev = null;
      while (pos > 0) {
        prev = curr;
        curr = curr.next;
        pos--;
      }
      prev.next = curr.next;
      curr.next = null;
    }
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // return slow.data if we want to return only value
}

function detectLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return 1;
    }
  }
  return 0;
}

function loopLength() {
  let slow = this.head;
  let fast = this.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let count = 1;
      let temp = slow;
      while (slow.next !== temp) {
        count++;
        slow = slow.next;
      }
      return count;
    }
  }
  return 0;
}
