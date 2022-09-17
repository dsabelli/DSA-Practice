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
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.length--;
    this.length === 0
      ? ((this.head = null), (this.tail = null))
      : (prev.next = null),
      (this.tail = prev);
    return current;
  }
  shift() {
    if (!this.length) {
      this.tail = null;
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    let item = this.head;
    let step = 0;
    if (!this.length || index >= this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      return item;
    }
    while (index > step) {
      item = item.next;
      step++;
    }
    return item;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length || index < 0) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let post = prev.next;
      prev.next = newNode;
      newNode.next = post;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prev = this.get(index - 1);
      let post = prev.next;
      prev.next = post.next;
      this.length--;
      return post;
    }
  }
  reverse() {
    if (!this.length) {
      return undefined;
    }
    let prev = null;
    let current = this.head;
    let next = current.next;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      prev = current;
      current = next;
      next = current.next;
      current.next = prev;
    }
    this.tail.next = null;
    return this;
  }
}
