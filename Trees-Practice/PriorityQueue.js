class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let queue = this.values;
    let node = new Node(val, priority);
    queue.push(node);
    let index = queue.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let temp;
    while (index > 0 && queue[index].priority < queue[parentIndex].priority) {
      temp = queue[index];
      queue[index] = queue[parentIndex];
      queue[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return queue;
  }
  dequeue() {
    let queue = this.values;
    if (!queue.length) return undefined;
    let temp = queue[0];
    queue[0] = queue[queue.length - 1];
    queue[queue.length - 1] = temp;
    let min = queue.pop();
    let index = 0;
    while (
      queue[index].priority > queue[getChildIndex(queue, index)].priority
    ) {
      let smallestChildIndex = getChildIndex(queue, index);
      temp = queue[smallestChildIndex];
      queue[smallestChildIndex] = queue[index];
      queue[index] = temp;
      index = smallestChildIndex;
    }
    return min;
  }
}

function getChildIndex(queue, index) {
  let childOneIndex = 2 * index + 1;
  let childTwoIndex = 2 * index + 2;

  return queue.length <= 2
    ? childOneIndex
    : queue[childOneIndex].priority < queue[childTwoIndex].priority
    ? childOneIndex
    : childTwoIndex;
}

const pQ = new PriorityQueue();

pQ.enqueue(1, 5);
pQ.enqueue(222, 1);
pQ.enqueue(33453, 4);
pQ.enqueue(4, 2);
pQ.enqueue(7, 3);
pQ.enqueue(5634, 11);
pQ.enqueue(67853, 7);
pQ.enqueue(3433, 13);
console.log(pQ);
console.log(pQ.dequeue());
