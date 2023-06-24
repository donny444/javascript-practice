function duplicateZero(arr) {
    if(arr == [] || Array.isArray(arr) == false) {
        return "Only Array that have element.";
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    return arr;
}

console.log(duplicateZero("donny"));
console.log(duplicateZero([])) //Bug
console.log(duplicateZero([2, 0, 2, 0, 2, 3]));

function duplicateNumber(arr, num) {
    if(arr == [] || Array.isArray(arr) == false) {
        return "Only Array that have element.";
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            arr.splice(i, 0, num);
            i++;
        }
    }
    return arr;
}

console.log(duplicateNumber("galaxy"));
console.log(duplicateNumber([])) //Bug
console.log(duplicateNumber([2, 0, 2, 0, 2, 3], 2));

function deleteNumber(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == num) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(deleteNumber([1, 2, 1, 2, 3, 1, 2, 1, 2, 1], 1));