const obj = JSON.parse('{ "name": "Donny", "surname": "Galaxy" }');
const text = '["Boat", "Train", "Tank"]';
const myArr = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;