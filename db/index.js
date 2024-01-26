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
  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?;", [employee]);
  }
  removeEmployee(employee_id) {
    return this.connection
      .promise()
      .query("DELETE FROM employee WHERE id = ?;", [employee_id]);
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
}

module.exports = new DB(connection);
