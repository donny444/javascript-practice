function mutiplyAll(arr) {
    var product = 1;
    for (var i=0;i<arr.length;i++) {
        for (var j=0;j<arr[i].length;j++) {
            product *= arr[i][j]; //2-dimension array
        }
    }
    return product;
}
var product = mutiplyAll([[1],[2,3,4],[5,6,7,8]]);
console.log(product);