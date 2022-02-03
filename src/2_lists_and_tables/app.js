// Lists and Tables
// example of lists: the items from a product list or a collection of values
// example of table: colections of key-value-pairs
// objects and maps from the JavaScript built-in data-structure
// tables are great for quickly extracting data with keys

// list in JavaScript

const shoppingList = ['Bread', 'Butter', 'Orange Juice'];

const thirdItem = shoppingList[2];

for (const item of shoppingList) {
	// ...do something with the item
}

// objects in JavaScript

const citizens = {
	'individual one': {
		firstName: 'John',
		lastName: 'Smith',
		address: '123 Moon ave',
		birthday: 'December 1st 1989',
	},

	'individual two': {
		// ....
	},
};

const individualOneData = citizens['individual one']; // individual one`s data

// Custom list data structure (a simplified array)

// A basic stack:
// The stack prevents the user to take other actions besides push/pop

class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
	}

	pop() {
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}

	toArray() {
		return this.items.slice();
	}
}

const stack = new Stack();
stack.push('Cook dinner');
stack.push('wash dishes');
stack.push('Buy ingridients')

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
