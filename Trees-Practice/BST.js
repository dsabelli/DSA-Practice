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
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(2);
tree.insert(54);
tree.insert(21);
tree.insert(52);
tree.insert(69);
tree.insert(2);
console.log(tree.find(112));
