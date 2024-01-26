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
          { name: "Add employee", value: "ADD_EMPLOYEES" },
          { name: "remove an employee", value: "REMOVE_EMPLOYEES" },

          { name: "Find all Roles", value: "FIND_ROLES" },
          { name: "Create new role", value: "CREATE_ROLES" },
          { name: "remove a role", value: "REMOVE_ROLE" },
          { name: "View all departments", value: "VIEW_DEPARTMENTS" },

          { name: "Create new Department", value: "CREATE_DEPARTMENT" },
          { name: "Remove a department", value: "DESTROY_DEPARTMENTS" },
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
        case "ADD_EMPLOYEES":
          addEmployee();
          break;
        case "REMOVE_EMPLOYEES":
          removeEmployee();
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
        case "CREATE_DEPARTMENT":
          createDepartment();
          break;
        case "DESTROY_DEPARTMENTS":
          removeDepartment();
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
  DB.findAllPossibleManagers()
    .then(([rows]) => {
      let managers = rows;
      console.table(managers);
    })
    .then(() => {
      chooseRequest();
    });
}
function addEmployee() {
  console.log("employees found");
  inquirer
    .prompt([
      {
        type: "input",
        name: "Firstname",
        message: "whats the first name of the employee",
      },
      {
        type: "input",
        name: "lastName",
        message: "whats the lastname of the employee",
      },
      {
        type: "input",
        name: "roleId",
        message: "whats your role id",
      },
      {
        type: "input",
        name: "managerId",
        message: "whats your managers id",
      },
    ])
    .then((inquirerResponse) => {
      const employeeData = {
        first_name: inquirerResponse.Firstname,
        last_name: inquirerResponse.lastName,
        role_id: inquirerResponse.roleId,
        manager_id: inquirerResponse.managerId,
      };
      console.log(employeeData);
      DB.createEmployee(employeeData).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "added an employee" });
      });
    })
    .then(() => {
      findAllEmployees();
    });
}

function removeEmployee() {
  console.log("employees role");
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeId",
        message: "enter the id of the employee you want removed.",
      },
    ])
    .then((inquirerResponse) => {
      DB.removeEmployee(inquirerResponse.employeeId).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "Removed an employee" });
      });
    })
    .then(() => {
      findAllEmployees();
    });
}
// // TODO get update employee role working
// function updateEmployeeRole() {
//   console.log("employees found");
//   DB.updateEmployeeRole().then(([rows]) => {
//     let managers = rows;
//     console.table(managers);
//   });
// }
// // todo get uodate emoloyee manager working
// function updateEmployeeManager() {
//   console.log("employees found");
//   DB.updateEmployeeManager().then(([rows]) => {
//     let managers = rows;
//     console.table(managers);
//   });
// }
function findAllRoles() {
  console.log("roles found");
  DB.findAllRoles()
    .then(([rows]) => {
      let row = rows;
      console.table(row);
    })
    .then(() => {
      chooseRequest();
    });
}
function createRole() {
  console.log("employees found");
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "whats the title of the new role",
      },
      {
        type: "input",
        name: "departmentId",
        message: "Whats the departments id it belongs to",
      },
      {
        type: "input",
        name: "salarys",
        message: "whats your the salary",
      },
    ])
    .then((inquirerResponse) => {
      const roleData = {
        title: inquirerResponse.roleTitle,
        salary: inquirerResponse.salarys,
        department_id: inquirerResponse.departmentId,
      };
      console.log(roleData);
      DB.createRole(roleData).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "Role added" });
      });
    })
    .then(() => {
      findAllRoles();
    });
}
function removeRole() {
  console.log("role deleted");
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleId",
        message: "enter the id of the employee you want removed.",
      },
    ])
    .then((inquirerResponse) => {
      DB.removeRole(inquirerResponse.roleId).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "Role Deleted" });
      });
    })
    .then(() => {
      findAllRoles();
    });
}
function findAllDepartments() {
  console.log("Department Created");
  DB.findAllDepartments()
    .then(([rows]) => {
      let managers = rows;
      console.table(managers);
    })
    .then(() => {
      chooseRequest();
    });
}
//TODO fix this to view the budgets
// function viewDepartmentBudget() {
//   console.log("employees found");
//   DB.viewDepartmentBudget().then(([rows]) => {
//     let managers = rows;
//     console.table(managers);
//   });
// }
function createDepartment() {
  console.log("Department Created");
  inquirer
    .prompt([
      {
        type: "input",
        name: "depName",
        message: "Whats the name of the m=new departmentdd",
      },
    ])

    .then((inquirerResponse) => {
      const departmentData = {
        name: inquirerResponse.depName,
      };
      console.log(departmentData);
      DB.createDepartment(departmentData).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "Department added" });
      });
    })
    .then(() => {
      findAllDepartments();
    });
}
function removeDepartment() {
  console.log("Department deleted");
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentId",
        message: "enter the id of the department you want removed.",
      },
    ])
    .then((inquirerResponse) => {
      DB.removeDepartment(inquirerResponse.departmentId).then((err, res) => {
        if (err) {
          console.error(err);
        }
        console.log({ message: "department Deleted" });
      });
    })
    .then(() => {
      findAllDepartments();
    });
}

chooseRequest();
