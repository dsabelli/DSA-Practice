class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    let node;
    if (!this.length) {
      return undefined;
    } else if (this.length === 1) {
      node = this.first;
      this.first = null;
      this.last = null;
    } else {
      node = this.first;
      this.first = node.next;
      node.next = null;
    }
    this.length--;
    return node;
  }
}
