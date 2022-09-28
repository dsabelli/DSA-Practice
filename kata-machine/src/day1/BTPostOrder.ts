export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    let current = head;
    const traverse = (current: BinaryNode<number>): void => {
        if (!current) return;
        if (current.left) traverse(current.left);
        if (current.right) traverse(current.right);
        path.push(current.value);
    };
    traverse(current);
    return path;
}
