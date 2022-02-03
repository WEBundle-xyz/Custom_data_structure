class LinkedList {
	constructor() {
		this.head = null; // First element of the list
		this.tail = null; // Last element of the list
	}

	append(value) {
		const newNode = { value: value, next: null };

		if (this.tail) {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		if (!this.head) {
			this.head = newNode;
		}
	}

	prepend(value) {
		const newNode = { value: value, next: this.head };

		this.head = newNode;
		if (!this.tail) {
			this.tail = newNode;
		}
	}

	insertAfter(value, afterValue) {
		const existingNode = this.find(afterValue);

		if (existingNode) {
			const NewNode = { value: value, next: existingNode.next };
			existingNode.next = newNode;
		}
	}

	find(value) {
		if (!this.head) {
			return;
		}

		let curNode = this.head;

		while (curNode) {
			if (curNode.value === value) {
				return curNode;
			}
			curNode = curNode.next;
		}

		return null;
	}

	delete(value) {
		if (!this.head) {
			return;
		}

		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		let curNode = this.head;

		while (curNode.next) {
			if (curNode.next.value === value) {
				curNode.next = curNode.next.next;
			} else {
				curNode = curNode.next;
			}
		}

		if (this.tail.value === value) {
			this.tail = curNode;
		}
	}

	toArray() {
		const elements = [];

		let curNode = this.head;
		while (curNode) {
			elements.push(curNode);
			curNode = curNode.next;
		}

		return elements;
	}
}
const linkedList1 = new LinkedList();
linkedList1.append(100);
linkedList1.append('This is WEBundle');
linkedList1.append('This is WEBundle - to delete this one');
linkedList1.append(true);
linkedList1.append(34.45);

console.log(linkedList1.toArray());

console.log(linkedList1.toArray());

linkedList1.append(100);
linkedList1.append('This is WEBundle');
linkedList1.append('This is WEBundle - to delete this one');

console.log(linkedList1.toArray());
console.log(linkedList1.find('This is WEBundle'));

linkedList1.insertAfter('some value before 1', 1);
linkedList1.insertAfter('some value before 1', 'Choose WEBundle');
