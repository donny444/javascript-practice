const a = new Boolean(false);
if (a) {
    // this code is executed
    console.log("Line 4 of code is executed");
}

const b = false;
if (b) {
    // this code is not executed
    console.log("Line 10 of code is executed");
}

const good = Boolean(1); // use this
const good2 = !!1 // or this
const bad = new Boolean(1) // don't use this!

const myFalse = new Boolean(false); // initial value of false
const g = Boolean(myFalse); // initial value of true
const myString = new String("Hello"); // string object
const s = Boolean(myString); // initial value of true

if ([]) {
    console.log("[] is truthy");
}
if ([] == false) {
    console.log("[] == false");
}

//Creating Boolean objects with an initial value of false
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

//Creating Boolean objects with an initial value of true
const btrue = new Boolean(true);
const btrueString = Boolean("true");
const bfalseString = Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});