class HashTable {
	constructor() {
		this.size = 1000;
		this.buckets = Array(1000).fill(null);
	}

	hash(key) {
		let hash = 0;
		for (const char of key) {
			hash += char.charCodeAt(0);
		}

		return hash % this.size;
	}

	set(key, value) {
		const keyKHash = this.hash(key);
		this.buckets[keyKHash];
	}

	get(key) {
		const keyKHash = this.hash(key);
		return this.buckets[keyKHash];
	}

	showInfo() {
		for (const key in this.buckets) {
			if (this.buckets[key] !== null) {
				console.log(key, this.buckets[key]);
			}
		}
	}
}
const table1 = new HashTable();

for (const char of 'WEBundle') {
	table1.set(char, 1);
}

for (const char of 'Web development') {
	table1.set(char, 1);
}

for (const char of 'Such a rainy day') {
	table1.set(char, 1);
}



console.log(table1.showInfo());