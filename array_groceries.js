var myGroceries=[["Banana",10],["Milk",15],["Coffee",50]];
//my array

myGroceries.push(["Bread",40]) //add next element
myGroceries.pop() //remove last element
myGroceries.shift() //remove first element
myGroceries.unshift(["Egg",5]) //add begin element

function myFunc(a)
{
    console.log("Item: "+myGroceries[a][0]+" is "+myGroceries[a][1]+" Thai Baht.");
}
console.log(myFunc(0))
console.log(myGroceries)