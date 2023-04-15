const g = 9.8;
const pi = 3.14

//Normal Function
hello1 = function() {
    return "Hello World!";
}

//Arrow Function
hello2 = () => {
    return "Hello World!";
}

//Shorter Arrow Function (only one statement)
hello3 = () => "Hello World!";

//Arrow Function With Parameters
hello4 = (val) => "Hello " + val;

weight = (m) => m * g;
console.log(weight(40))

pussyOrNot = (name, exercise) => {
    console.log("Hi " + name);
    if (exercise == "Sumo Deadlift")
        console.log("You're a pussy!");
    else;
}
console.log(pussyOrNot("Donny", "Sumo Deadlift"))

//Source: https://www.w3schools.com/js/js_arrow_function.asp