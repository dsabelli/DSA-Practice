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
}

const graph = new Graph();

graph.addVertex("Leamington");
graph.addVertex("London");
graph.addVertex("Montreal");
graph.addEdge("Leamington", "London");
graph.addEdge("Leamington", "Montreal");
console.log(graph.removeVertex("Leamington"));
console.log(graph);
