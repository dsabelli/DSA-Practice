export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    let current = head;
    const traverse = (current: BinaryNode<number>): void => {
        if (!current) return;
        if (current.left) traverse(current.left);
        path.push(current.value);
        if (current.right) traverse(current.right);
    };
    traverse(current);
    return path;
}
