class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) {
      return undefined;
    } else {
      let node = this.first;
      this.length === 1
        ? ((this.first = null), (this.last = null))
        : ((this.first = node.next), (node.next = null));
      this.length--;
      return node;
    }
  }
}
