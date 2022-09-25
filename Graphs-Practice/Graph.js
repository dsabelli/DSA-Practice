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

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  removeVertex(vertex) {
    const list = this.adjacencyList;
    if (list[vertex]) {
      while (list[vertex].length) {
        this.removeEdge(vertex, list[vertex][0]);
      }
    }
    delete list[vertex];
  }
  addEdge(v1, v2, weight) {
    const list = this.adjacencyList;
    if (list[v1]) list[v1].push({ vtx: v2, weight });
    if (list[v2]) list[v2].push({ vtx: v1, weight });
  }
  removeEdge(v1, v2) {
    const list = this.adjacencyList;
    if (list[v1]) list[v1] = list[v1].filter((v) => v !== v2);
    if (list[v2]) list[v2] = list[v2].filter((v) => v !== v1);
  }
  DFSRecursive(vtx) {
    const list = this.adjacencyList;
    const visited = {};
    const path = [];
    const DFS = (vtx) => {
      if (!list[vtx].length) return;
      visited[vtx] = true;
      path.push(vtx);
      for (let i = 0; i < list[vtx].length; i++) {
        let nextVtx = list[vtx][i];
        if (!visited[nextVtx]) DFS(nextVtx);
      }
    };
    DFS(vtx);
    return path;
  }
  DFSIterative(vtx) {
    const list = this.adjacencyList;
    const visited = {};
    const path = [];
    const stack = [vtx];
    let currentVtx;
    while (stack.length) {
      currentVtx = stack.pop();
      path.push(currentVtx);
      visited[currentVtx] = true;
      list[currentVtx].forEach((v) =>
        visited[v] ? null : (stack.push(v), (visited[v] = true))
      );
    }
    return path;
  }
  BFSIterative(vtx) {
    const list = this.adjacencyList;
    const visited = {};
    const path = [];
    const queue = [vtx];
    let currentVtx;
    while (queue.length) {
      currentVtx = queue.shift();
      path.push(currentVtx);
      visited[currentVtx] = true;
      list[currentVtx].forEach((v) =>
        visited[v] ? null : (queue.push(v), (visited[v] = true))
      );
    }
    return path;
  }
  findShortestPath(v1, v2) {
    let smallest;
    const list = this.adjacencyList;
    const distance = {};
    const previous = {};
    const queue = new PriorityQueue();
    for (const key in list) {
      key === v1
        ? ((distance[key] = 0), queue.enqueue(key, 0))
        : ((distance[key] = Infinity), queue.enqueue(key, Infinity));
      previous[key] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === v2) break;
      // else {
      //   if (smallest || distance[smallest] !== Infinity) {
      //     for (let v in list[smallest]) {
      //       console.log(v);
      //       let nextVtx = list[smallest][v];
      //       let nextSmallest = distance[smallest] + nextVtx.weight;
      //       if (nextSmallest < distance[nextVtx.vtx]) {
      //         distance[nextVtx.vtx] = nextSmallest;
      //         previous[nextVtx.vtx] = smallest;
      //         queue.enqueue(nextVtx.vtx, nextSmallest);
      //       }
      //     }
      //   }
      // }
      else {
        if (smallest || distance[smallest] !== Infinity) {
          list[smallest].forEach((v) => {
            let nextSmallest = distance[smallest] + v.weight;
            if (nextSmallest < distance[v.vtx]) {
              distance[v.vtx] = nextSmallest;
              previous[v.vtx] = smallest;
              queue.enqueue(v.vtx, nextSmallest);
            }
          });
        }
      }
    }
    console.log(previous);
    return distance;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("B", "E", 3);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
// console.log(graph.adjacencyList);
console.log(graph.findShortestPath("A", "E"));
