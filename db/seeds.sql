INSERT INTO department (name)
VALUES 
("IT"),
("Social Media"),
("Software Development"),
("HR");

INSERT INTO role (title, salary, department_id)
VALUES 
("Technical Evangelist", 100000, 1),
("Scrum Master", 80000, 1),
("Social Inventor", 150000, 2), 
("Digital Prophet", 120000, 2),
("Lead Code Wizard", 250000, 3),
("Code Monkey", 190000, 3),
("Chief People Pleaser", 160000, 4),
("People Champion", 125000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Doe", 1, NULL),
("Chris", "Cross", 2, 1),
("Jay", "Walker", 3, NULL),
("Otto", "Graff", 4, 3),
("Tim", "Burr", 7, NULL),
("Sue", "Flay", 8, 5),
("Tad", "Pohl", 5, NULL),
("Rick", "O'Shea", 6, 7);