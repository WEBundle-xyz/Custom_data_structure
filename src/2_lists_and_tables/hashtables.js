// hash tables
// using hashing function to convert the key into an index

const word =
	'WEBundle is one of the best web development companies in this state!';

// function findFirstRep(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) {
// 				return str[i];
// 			}
// 		}
// 	}
// }

// The Time Complexity: O(n^2) --> nested loops

function findFirstRep(str) {
	const table = {};
	for (const char of str) {
		if (table[char]) {
			return char;
		}
		table[char] = 1;
	}
}

// The Time Complexity: O(n) --> more efficient way to write the algorithm

console.log(findFirstRep(word));
