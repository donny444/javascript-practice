function bhuddhismYear(init, callback) {
    const result = init + 543;
    console.log("Your birth year in Bhuddhism is " + result);
    callback(result);
}

function yourAge(init, callback) {
    const result = 2566 - init;
    console.log("Your age is " + result);
    callback(result);
}

function retired(init) {
    const result = 60 - init;
    console.log("You will be retired in " + result + " Year(s)");
}

function doOperation() {
    bhuddhismYear(2004, (result1) => {
        yourAge(result1, (result2) => {
            retired(result2)
        })
    })
}

doOperation();