const sampleArray1 = ["Esan", "Somtum", "Larb", 99, undefined];
const sampleArray2 = ["Ta", "na", "dorn"];
const sampleArray3 = ["Rach", "cha", "ta", "pee", "ti"];
const sampleArray4 = ["99", 99, NaN, false, undefined, [], 230.44];
const sampleArray5 = [5, 6, 7, 8, 9];

const esan = sampleArray1.entries();
const nameSpelling = sampleArray2.concat(sampleArray3);
const isNan = sampleArray4.findIndex(isNaN);
const circle = sampleArray5.forEach(circleArea);

for (let i of esan) {
    console.log(esan);
}
console.log(nameSpelling);
console.log(isNan);
function circleArea(x) {
    return Math.PI*x**2;
}
console.log(circle)