 
/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW
export function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
export class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
        let res = false;
        if (!this.#employees[empl.id]) {
            this.#employees[empl.id] = empl;
            res = true;
        }
        return res;
    }
    removeEmployee(id) {
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        let res = false;
        if (this.#employees[id]) {
            res = true;
            delete this.#employees[id]
        }
    }
    getEmployeesCountry(country) {
        //returns array of employee objects having field "country" equaled to a given country
        return Object.values(this.#employees)
        .filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        
        const currentYear = new Date().getFullYear();
        return Object.values(this.#employees)
        .filter(empl => currentYear - empl.birthYear === age);
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo < 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
        if (salaryTo < 0) {
            salaryTo = Number.MAX_VALUE
        }
        return Object.values(this.#employees)
        .filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);

    }
}