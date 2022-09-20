class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let heap = this.values;
    heap.push(val);
    let index = heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let temp;
    while (heap[index] > heap[parentIndex]) {
      temp = heap[parentIndex];
      heap[parentIndex] = heap[index];
      heap[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return heap;
  }

  extractMax() {
    let heap = this.values;
    if (!heap.length) return undefined;

    let temp = heap[0];
    heap[0] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;

    let max = heap.pop();

    let index = 0;

    while (heap[index] < heap[getChildIndex(heap, index)]) {
      let biggestChildIndex = getChildIndex(heap, index);

      temp = heap[biggestChildIndex];

      heap[biggestChildIndex] = heap[index];
      heap[index] = temp;
      index = biggestChildIndex;
    }
    return max;
  }
}

function getChildIndex(heap, index) {
  let childOneIndex = 2 * index + 1;
  let childTwoIndex = 2 * index + 2;

  return heap.length <= 2
    ? childOneIndex
    : heap[childOneIndex] > heap[childTwoIndex]
    ? childOneIndex
    : childTwoIndex;
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(55);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
heap.insert(69);
