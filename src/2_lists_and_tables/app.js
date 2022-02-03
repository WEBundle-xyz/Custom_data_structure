import { LinkedList } from './linkedlist.js';

class Stack {
	constructor() {
		this.list = new LinkedList();
	}

	push(value) {
		this.list.prepend(value);
	}

	pop() {
		return this.list.deleteHead();
	}

	isEmpty() {
		return !this.list.head;
	}
	toArray() {
		return this.list.toArray();
	}
}

const stack = new Stack();
stack.push('Cook dinner');
stack.push('wash dishes');
stack.push('Buy ingridients');

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
