const person = {
    name: {
      first: "Bob",
      last: "Smith"
    },
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};
const myDataName = "height";
const myDataValue = 1.75;
person[myDataName] = myDataValue;
person.age = 45;
person["name"]["last"] = "Cratchit";
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
}
function logProperty(propertyName) {
  console.log(person[propertyName]);
}

//Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics