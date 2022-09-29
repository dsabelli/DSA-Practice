import { AstPath } from "prettier";

function traverse(
    graph: WeightedAdjacencyList,
    current: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[current]) return false;

    seen[current] = true;

    path.push(current);
    if (current === needle) return true;

    const list = graph[current];
    for (let i = 0; i < list.length; i++) {
        let edge = list[i];
        if (traverse(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    traverse(graph, source, needle, seen, path);
    if (path.length === 0) return null;
    return path;
}
