/*
const myObject = {
    city: "Bangpusi",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };

myObject.greet(); // Greetings from Bangpusi

console.log(Object.getPrototypeOf(myObject))
*/
/*
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
*/
/*
const myBirthDay = new Date(2004, 04, 04)

console.log(myBirthDay.getYear());  //104
console.log(myBirthDay.getFullYear()); //2004

myBirthDay.getFullYear = function() {
    console.log("something else!") //"something else!"
};

myBirthDay.getFullYear();
*/
/*
const personPrototype = {
    greet() {
      console.log("hello!");
    }
};

const donny = Object.create(personPrototype);
donny.greet(); // hello!
*/

//Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes