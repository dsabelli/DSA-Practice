export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[0] = true;
    const queue: number[] = [source];
    do {
        const current = queue.shift() as number;
        if (current === needle) break;
        const adj = graph[current];
        for (let i = 0; i < graph.length; i++) {
            if (adj[i] === 0) continue;
            if (seen[i]) continue;
            seen[i] = true;
            prev[i] = current;
            queue.push(i);
        }
        seen[current] = true;
    } while (queue.length);
    let current = needle;
    const out: number[] = [];
    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }
    if (out.length) return [source].concat(out.reverse());
    return null;
}
