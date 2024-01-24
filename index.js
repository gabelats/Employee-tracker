const inquirer = require("inquirer");
const mySql = require("mysql2");
const DB = require("./db/index");
const chooseRequest = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do",
        choices: [
          { name: "Find all Employees", value: "FIND_EMPLOYEES" },
          { name: "View Managers", value: "VIEW_MANAGERS" },
          { name: "Create employee", value: "CREATE_EMPLOYEES" },
          { name: "remove an employee", value: "REMOVE_EMPLOYEES" },
          { name: "Update an employees role", value: "UPDATE_EMPLOYEE_ROLE" },
          {
            name: "Update an employees manager",
            value: "UPDATE_EMPLOYEE_MANAGER",
          },
          { name: "Find all Roles", value: "FIND_ROLES" },
          { name: "Create new role", value: "CREATE_ROLES" },
          { name: "remove a role", value: "REMOVE_ROLE" },
          { name: "View all departments", value: "VIEW_DEPARTMENTS" },
          { name: "View departments budgets", value: "VIEW_BUDGETS" },
          { name: "Create new Department", value: "CREATE_DEPARTMENT" },
          { name: "Remove a department", value: "DESTROY_DEPARTMENTS" },
          {
            name: "Find employees by department",
            value: "EMPLOYEES_BY_DEPARTMENT",
          },
          {
            name: "Find employees by manager",
            value: "EMPLOYEES_BY_MANAGER",
          },
          { name: "quit", value: "QUIT" },
        ],
      },
    ])
    .then(function (res) {
      console.log(res.choice);
      switch (res.choice) {
        case "FIND_EMPLOYEES":
          findAllEmployees();
          break;
        case "VIEW_MANAGERS":
          findAllPossibleManagers();
          break;
        case "CREATE_EMPLOYEES":
          createEmployee();
          break;
        case "REMOVE_EMPLOYEES":
          removeEmployee();
          break;
        case "UPDATE_EMPLOYEE_ROLE":
          updateEmployeeRole();
          break;
        case "UPDATE_EMPLOYEE_MANAGER":
          updateEmployeeManager();
          break;
        case "FIND_ROLES":
          findAllRoles();
          break;
        case "CREATE_ROLES":
          createRole();
          break;
        case "REMOVE_ROLE":
          removeRole();
          break;
        case "VIEW_DEPARTMENTS":
          findAllDepartments();
          break;
        case "VIEW_BUDGETS":
          viewDepartmentBudget();
          break;
        case "CREATE_DEPARTMENT":
          createDepartment();
          break;
        case "DESTROY_DEPARTMENTS":
          removeDepartment();
          break;
        case "EMPLOYEES_BY_DEPARTMENT":
          findAllEmployeesByDepartment();
          break;
        case "EMPLOYEES_BY_MANAGER":
          findAllEmployeesByManager();
          break;
      }
    });
};
//view all employees
function findAllEmployees() {
  console.log("employees found");
  DB.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => {
      chooseRequest();
    });
}
function findAllPossibleManagers() {
  console.log("employees found");
  DB.findAllPossibleManagers().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function createEmployee() {
  console.log("employees found");
  inquirer.prompt([
    {
      type: "input",
      name: "Firstname",
      message: "whats the first name of the employee",
    },
    {
      type: "input",
      name: "lastName",
      message: "whats the first name of the employee",
    },
    {
      type: "input",
      name: "roleId",
      message: "whats the first name of the employee",
    },
    {
      type: "input",
      name: "Firstname",
      message: "whats the first name of the employee",
    },
  ]);
  DB.createEmployee().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function removeEmployee() {
  console.log("employees found");
  DB.removeEmployee().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function updateEmployeeRole() {
  console.log("employees found");
  DB.updateEmployeeRole().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function updateEmployeeManager() {
  console.log("employees found");
  DB.updateEmployeeManager().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function findAllRoles() {
  console.log("employees found");
  DB.findAllRoles().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function createRole() {
  console.log("employees found");
  DB.createRole().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function removeRole() {
  console.log("employees found");
  DB.removeRole().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function findAllDepartments() {
  console.log("employees found");
  DB.findAllDepartments().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function viewDepartmentBudget() {
  console.log("employees found");
  DB.viewDepartmentBudget().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function createDepartment() {
  console.log("employees found");
  DB.createDepartment().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function removeDepartment() {
  console.log("employees found");
  DB.removeDepartmentt().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function findAllEmployeesByDepartment() {
  console.log("employees found");
  DB.findAllEmployeesByDepartment().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
function findAllEmployeesByManager() {
  console.log("employees found");
  DB.findAllEmployeesByManager().then(([rows]) => {
    let managers = rows;
    console.table(managers);
  });
}
chooseRequest();
