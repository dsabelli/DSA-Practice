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
  get(val) {
    let item = this.head;
    let step = 0;
    if (!this.length || val >= this.length || val < 0) {
      return null;
    }
    if (val === 0) {
      return item;
    }
    while (val > step) {
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
}

const list = new SinglyLinkedList();
list.push(21);
list.push(241);
list.push(123);
list.push(445);
console.log(list.set(5, 69));
