
/* HW #21 */

import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";

// Employe structure and function createEmployee() taken from previous HW
export function createEmployee(name, birthYear, salary, city, country) {
    return { name, birthYear, salary, address: { city, country } }
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
        const res = checkEmployeeData(empl);
        const id = this.#getId();
        if (res === '') {
            
            empl.id = id;
            this.#employees[id] = empl;
        }

        return {message: res, id};
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
    #getId() {
        let id=0;
        do {
            id = getRandomNumber(employeeConfig.minId, employeeConfig.maxId + 1);
        }while(this.#employees[id]);
        return id;
    }
    getAllEmployees() {
        return Object.values(this.#employees);
    }
}
function checkEmployeeData(employee) {
    let resStr = '';
    if (employee.salary < employeeConfig.minSalary ||
        employee.salary > employeeConfig.maxSalary) {
        resStr = `salary must be in the range [${employeeConfig.minSalary}-${employeeConfig.maxSalary}]; `
    }
    if (employee.birthYear < employeeConfig.minYear ||
        employee.birthYear > employeeConfig.maxYear) {
        resStr += `birth year must be in the range [${employeeConfig.minYear}-${employeeConfig.maxYear}]`
    }
    return resStr;
}