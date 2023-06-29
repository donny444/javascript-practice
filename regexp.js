const pattern= /Matrix/i;
let text = "Welcome to The Matrix";
let real = "Real World";
var bool = pattern.test(text);

console.log(!bool);

var result = text.search(pattern);
console.log(result);

var result = text.replace(pattern, "Real World");
console.log(result);
var bool = pattern.test(result);
console.log(!bool);