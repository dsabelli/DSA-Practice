type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        const node = { value: item } as Node<T>;
        let current;
        if (idx > this.length || idx < 0) return undefined;
        else if (idx === this.length) current = this.prepend(item);
        else if (idx === 0) current = this.append(item);
        else {
            current = this.getAt(idx);
            if (current) {
                node.next = current.next;
                node.prev = current;
                if (current.next) {
                    current.next.prev = node;
                }
                current.next = node;
            }
        }
        this.length++;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail ? (this.tail.next = node) : null;
            this.tail = node;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.length === 0) return undefined;
        let current = this.head;
        for (let i = 0; current && i < this.length; i++) {
            current = current.next;

            if (current?.value === item) {
                if (current === this.head) {
                    this.head = current.next;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }

                current.prev = current.next = undefined;
                this.length--;
                return current.value;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        let current;
        if (idx > this.length || idx < 0) return undefined;
        else {
            current = this.getAt(idx);
            if (current) {
                if (current === this.head) {
                    this.head = current.next;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }
                current.prev = current.next = undefined;
            }
        }
        this.length--;
        return current?.value;
    }

    getAt = (idx: number): Node<T> | undefined => {
        let current;
        let step;
        if (idx > this.length || idx < 0) return undefined;
        else if (this.length / 2 > idx && this.tail) {
            step = this.length - 1;
            current = this.tail;
            while (step > idx) {
                step--;
                if (current) current = current.prev;
            }
        } else if (this.length / 2 < idx && this.head) {
            step = 0;
            current = this.head;
            while (step < idx) {
                step++;
                if (current) current = current.next;
            }
        }
        return current;
    };
}

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.remove(2));
