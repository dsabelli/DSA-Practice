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
  addEdge(v1, v2) {
    const list = this.adjacencyList;
    if (list[v1]) list[v1].push(v2);
    if (list[v2]) list[v2].push(v1);
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
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFSIterative("A"));
