export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    let current = head;
    const traverse = (current: BinaryNode<number>): void => {
        if (!current) return;
        path.push(current.value);
        if (current.left) traverse(current.left);
        if (current.right) traverse(current.right);
    };
    traverse(current);
    return path;
}
