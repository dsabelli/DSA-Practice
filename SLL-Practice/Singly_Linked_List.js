class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) {
      return undefined;
    }
    let current = this.head;
    let pre = null;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.length--;
    this.length === 0
      ? ((this.head = null), (this.tail = null))
      : (pre.next = null),
      (this.tail = pre);

    console.log(this.tail, this.length);
    return current;
  }
}

const list = new SinglyLinkedList();