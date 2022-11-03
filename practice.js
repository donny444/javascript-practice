// Setup
function compareEquality(a, b) {
    if (a === b) { //Change this line
        return "Equal"
    }
    return "Not Equal"
}

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }
    else if (num < 10) {
        return "Small"
    }
    else if (num < 15) {
        return "Medium"
    }
    else if (num < 20) {
        return "Large"
    }
    else {
        return "Huge"
    }
}

function isLess(a, b) {
    return a < b 
}
const myBio = {
    name: ["Tanadorn","Rachatapeeti","Donny"],
    birth: ["4th","April","2004"]
}
function myName(arr) {
    const resultNameArray = []
    for (let i = 0; i < arr.length; i++) {
        resultNameArray.push(arr[i])
    }
    const resultName = "Your firstname is "+resultNameArray[0]+" and your nickname is "+resultNameArray[2]
    return resultName
}
function myBirth(arr) {
    const resultBirthArray = []
    for (let i = 0; i < arr.length; i++) {
        resultBirthArray.push(arr[i])
    }
    const resultBirth = "Day: "+resultBirthArray[0]+"\nMonth: "+resultBirthArray[1]+"\nYear: "+resultBirthArray[2]
    return resultBirth
}
const myConcat = (arr1, arr2) => arr1.concat(arr2);

const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})();
const myTime = {
    Oct31: { wake: "9:00", sleep: "21:00" },
    Nov1: { wake: "6:00", sleep: undefined }
}
function getWakeTimeToday(time) {
    "use strict";
    const { Nov1: { wake: wakeTimeToday } } = time
    return wakeTimeToday
}
// Change this value to test
const resultName = (myName(myBio.name))
const resultBirth = (myBirth(myBio.birth))
console.log(resultName)
console.log(resultBirth)