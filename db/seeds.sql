INSERT INTO department(name)
VALUE ("Sales"),
	("Finance"),
      ("Legal"),
      ("Engineering");
      
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 3),
	  ("Legal Team Lead",250000, 3),
      ("legal Secretary", 50000, 3),
      ("Salesperson", 80000, 1),
      ("Sales Manager", 100000, 1),
      ("Accountant", 125000, 2),
      ("Account Manager", 160000, 2),
      ("Lead Engineer", 150000, 4),
      ("Software Engineer", 120000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ("John", "Doe", 5, null),
	  ("Mike", "Chan", 4, 1),
      ("Ashley", "Rodriguez", 8, null),
      ("Kevin", "Tupik", 9, 3),
      ("Kunal", "Singh", 7, null),
      ("Malia", "Brown", 6, 5),
      ("Sarah", "Lourd", 2, null),
      ("Tom", "Allen", 1, 7);