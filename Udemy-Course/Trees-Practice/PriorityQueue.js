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
    if (!queue.length) return queue;
    let temp = queue[0];
    queue[0] = queue[queue.length - 1];
    queue[queue.length - 1] = temp;
    let min = queue.pop();
    let index = 0;
    let smallest = getChildIndex(queue, index);

    while (smallest !== index) {
      temp = queue[smallest];
      queue[smallest] = queue[index];
      queue[index] = temp;
      index = smallest;
      smallest = getChildIndex(queue, index);
    }
    return min;
  }
}

function getChildIndex(queue, index) {
  let childOneIndex = 2 * index + 1;
  let childTwoIndex = 2 * index + 2;

  if (
    childTwoIndex < queue.length &&
    queue[childOneIndex].priority < queue[childTwoIndex].priority
  )
    return childOneIndex;

  if (
    childTwoIndex < queue.length &&
    queue[childOneIndex].priority > queue[childTwoIndex].priority
  )
    return childTwoIndex;
  if (queue.length <= 2) return 1;
  return index;
}
