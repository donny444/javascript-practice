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