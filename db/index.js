const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }
  findAllPossibleManagers(employee_id) {
    return this.connection
      .promise()
      .query("SELECT id, first_name, last_name FROM employee WHERE id = ?;", [
        employee_id,
      ]);
  }
  createEmployee(first_name, last_name, role_id, manager_id) {
    return this.connection
      .promise()
      .query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id,) VALUES (?, ?, ?, ?) ;",
        [first_name, last_name, role_id, manager_id]
      );
  }
  removeEmployee(employee_id) {
    return this.connection
      .promise()
      .query("DELETE FROM employee WHERE id = ?;", [employee_id]);
  }
  updateEmployeeRole(employee_id, role_id) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id =? WHERE id = ?;", [
        role_id,
        employee_id,
      ]);
  }
  updateEmployeeManager(employee_id, manager_id) {
    return this.connection
      .promise()
      .query("UPDATE employee SET manager_id =? WHERE id =?;", [
        employee_id,
        manager_id,
      ]);
  }
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS departments, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
      );
  }
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?;", [role]);
  }
  removeRole(role_id) {
    return this.connection
      .promise()
      .query("DELETE FROM role WHERE id = ?;", [role_id]);
  }
  findAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }
  viewDepartmentBudget() {
    return this.connection
      .promise()
      .query(
        "SELECT department.id, department.name SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY depatment.id, department.name;"
      );
  }
  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?;", [department]);
  }
  removeDepartment(department_id) {
    return this.connection
      .promise()
      .query("DELETE FROM department WHERE id = ?;", [department_id]);
  }
  findAllEmployeesByDepartment(department_id) {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id WHERE department.id = ?;",
        [department_id]
      );
  }

  findAllEmployeesByManager(manager_id) {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
        [manager_id]
      );
  }
}

module.exports = new DB(connection);
