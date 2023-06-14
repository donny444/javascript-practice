const sampleArray1 = ["Esan", "Somtum", "Larb", 99, undefined];
const sampleArray2 = ["Ta", "na", "dorn"];
const sampleArray3 = ["Rach", "cha", "ta", "pee", "ti"];
const sampleArray4 = ["99", 99, NaN, false, undefined, [], 230.44];
const sampleArray5 = [5, 6, 7, 8, 9];

const esan = sampleArray1.entries(); //Returns a key/value pair Array Iteration Object
const nameSpelling = sampleArray2.concat(sampleArray3); //Joins arrays and returns an array with the joined arrays
const isNan = sampleArray4.findIndex(isNaN); //Returns the index of the first element in an array that pass a test
const circle = sampleArray5.forEach(circleArea); //Calls a function for each array element

for (let i of esan) {
    console.log(esan); //[0, "Esan"] [1, "Somtum"] [2, "Larb"] [3, 99] [4, undefined]
}
console.log(nameSpelling); //['Ta', 'na', 'dorn', 'Rach', 'cha', 'ta', 'pee', 'ti']
console.log(isNan); //2
function circleArea(x) {
    return Math.PI*x**2;
}
console.log(circle) //undefined

//Source: https://www.w3schools.com/jsref/jsref_obj_array.asp