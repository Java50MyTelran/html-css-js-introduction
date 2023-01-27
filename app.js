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
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        //TODO
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
    }
    removeEmployee(id) {
        //TODO
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
    }
    getEmployeesCountry(country) {
        //TODO
        //returns array of employee objects having field "country" equaled to a given country
    }
    getEmployeesByAge(age) {
        //TODO
        //returns array of employee objects with a given age
    }
    getEmployeesBySalaries(salryFrom, salryTo) {
        //TODO
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
    }
}