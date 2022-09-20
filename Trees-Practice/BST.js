class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val === current.val) return true;
      if (val < current.val) {
        if (current.left === val) return true;
        else if (current.left === null) return false;
        current = current.left;
      } else if (val > current.val) {
        if (current.right === val) return true;
        else if (current.right === null) return false;
        current = current.right;
      }
    }
  }
  //   find(val) {
  //     if (!this.root) return false;
  //     let current = this.root;
  //     let found = false;
  //     while (current && !found) {
  //       console.log(found);
  //       if (val < current.val) {
  //         current = current.left;
  //       } else if (current > current.val) {
  //         current = current.right;
  //       } else {
  //         found = true;
  //       }
  //     }
  //     if (!found) return undefined;
  //     return current;
  //   }

  BFS() {
    const data = [];
    const queue = [];
    let node;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  DFSPreOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPostOrder());
