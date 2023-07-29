const array = [1, 2, 3, 4, 5];

// for
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
// 1 2 3 4 5

// while
let index = 0;
while (index < array.length) {
 console.log(array[index]);
}
// 1 2 3 4 5

// forEach
array.forEach(function(current_value, index, array) {
    console.log(current_value);
})
// 1 2 3 4 5

// map
const square = x => Math.pow(x, 2);
const squares = array.map(square);
console.log(`Original array: ${array}`);
console.log(`Squared array: ${squares}`);
// Original array: 1,2,3,4,5
// Squared array: 1,4,9,16,25

// reduce
const sum = (x, y) => x + y;
const array_sum = array.reduce(sum, 0);
console.log(`The sum of array: ${array} is ${array_sum}`);
// The sum of array: 1,2,3,4,5 is 15

// filter
const even = x => x % 2 === 0;
const even_array = array.filter(even);
console.log(`Even numbers in array ${array}: ${even_array}`);
// Even numbers in array 1,2,3,4,5: 2,4

// every
const under_seven = x => x < 7;
if (array.every(under_seven)) {
    console.log('less than 7');
} else {
    console.log('bigger than 7');
}
// less than 7

// some
const over_seven = x => x > 7;
if (array.some(over_seven)) {
    console.log('element bigger than 7 was found');
} else {
    console.log('no element bigger than 7 was found');
}
// no element bigger than 7 was found
