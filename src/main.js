import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";


const company = new Company();
const employeeForm = new EmployeeForm("form-section")
function addEmployee(employeeData) {
   
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
    return company.addEmployee(employee);
    
}
employeeForm.addFormHandler(addEmployee)

