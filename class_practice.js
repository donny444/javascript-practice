function shoeClass(){
    class shoeSize {
        constructor(size) {
            this._size = size - 1
        }
        get shoe(){
            return this._size
        }
        set shoe(updatedSize){
            this._size = updatedSize
        }
    }
    return shoeSize
}
const shoeSize = shoeClass()
const shoes = new shoeSize(9)
let size = shoes.shoe
console.log(size)

class Orbortor {
    constructor(name, birthday, college) {
        this.name = name;
        this.birthday = birthday;
        this.college = college;
    }
    introduce() {
        console.log(`Name: ${this.name}, College: ${this.college}\n${this.birthday}`);
    }
}
var f1 = new Orbortor("Touch", new Date("2004-03-08"), "RU");
console.log(f1);