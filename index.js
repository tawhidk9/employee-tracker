//DEPENDENCIES
const inquirer = require("inquirer");
const db = require("./db/db");
const cTable = require('console.table');

//QUERIES//

//Department Query
const deptQ = () => db.query(`SELECT * FROM department`,(err,result) => {
    if (err) {console.log(err)}
    console.table(result);
});

//Role Query
const roleQ = () => db.query(`SELECT * FROM role`,(err,result) => {
    if (err) {console.log(err)}
    console.table(result);
});

//Employee Query
const employeeQ = () => db.query(`SELECT * FROM employee`,(err,result) => {
    if (err) {console.log(err);}
    console.table(result);
});

// Add Department

const newDepartment = () => {
    const question = {
      type: "input",
      message: "What is the name of the new department?",
      name: "deptName",
    };
    inquirer.prompt(question).then((answer) => {
        console.log(answer);
      db.query(`INSERT INTO department (name) VALUES (?)`, 
      answer.deptName,
      (err, result)=> {if (err) {console.log(err);}
          departmentsQuery();
        });
    });
  };

  //User should have a menu that will branch into different actions
  const mainMenu = {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Role",
    ],
    name: "menu",
  };

//Depending on what User selects, it should trigger different queries. switch statement? if/elif/then?

function handleAnswers(answers) {
    const selectedAnswer = answers.name;
  
    // console.log(selectedAnswer);
    switch (selectedAnswer) {
      case "View Departments":
        deptQ();
        break;
      case "View Roles":
        roleQ();
        break;
      case "View Employees":
        employeeQ();
        break;
      case "Add Department":
        newDepartment();
        break;
    }
  }
  
  inquirer.prompt(mainMenu).then((answers) => handleAnswers(answers));
