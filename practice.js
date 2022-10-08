// Setup
function compareEquality(a,b) {
    if(a===b) { //Change this line
    return "Equal"
    }
    return "Not Equal"
}

function testSize(num) {
    if (num<5) {
        return "Tiny"
    }
    else if (num<10) {
        return "Small"
    }
    else if (num<15) {
        return "Medium"
    }
    else if (num<20) {
        return "Large"
    }
    else {
        return "Huge"
    }
}

function isLess(a,b) {
    return a<b
}

// Change this value to test
console.log(compareEquality(10,"10"))
console.log(testSize(18))
console.log(isLess(20,15))