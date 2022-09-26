type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        const poppedNode = this.head;
        if (this.length === 1) this.head = this.tail = undefined;
        else {
            this.head = poppedNode.next;
            poppedNode.next = undefined;
        }
        this.length--;
        return poppedNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
