class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      temp.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return temp;
  }
  shift() {
    if (!this.length) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    let current;
    let step = 0;
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    if (index <= this.length / 2) {
      current = this.head;
      while (step < index) {
        current = current.next;
        step++;
      }
    }
    if (index > this.length / 2) {
      current = this.tail;
      step = this.length - 1;
      while (step > index) {
        current = current.prev;
        step--;
      }
    }
    return current;
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
      let node = new Node(val);
      let current = this.get(index - 1);
      node.prev = current;
      node.next = current.next;
      node.next.prev = node;
      current.next = node;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) {
      return false;
    }
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let current = this.get(index);
      current.prev.next = current.next;
      current.next.prev = current.prev;
      current.next = null;
      current.prev = null;
      this.length--;
      return current;
    }
  }
  reverse() {
    let temp;
    temp = this.tail;
    this.tail = this.head;
    this.head = temp;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      let temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.next;
    }
    this.head.prev = null;
    this.tail.next = null;
    return this;
  }
}
