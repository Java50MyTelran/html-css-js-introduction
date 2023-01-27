 const rectangle = {width: 20, height: 10, square: function () {
    return this.width * this.height;
},perimeter: function()  {
    return this.width * 2 + this.height * 2
}}
// this.width = 100;
// this.height = 200;
// console.log(this)
 console.log(rectangle.square());
 console.log(rectangle.perimeter());
 
class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#height = height;
        this.#width = width;
    }
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return this.#width * 2 + this.#height *2
    }
}
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// }
const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.square());
Rectangle.prototype.square = function() {
    return "kuku"
}
console.log(rectangle1.square());
//console.log(rectangle1.perimeter());
/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW