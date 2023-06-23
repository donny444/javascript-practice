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