//DEPENDENCIES
const inquirer = require("inquirer");
const db = require("./db/db");
const cTable = require('console.table');

//QUERIES//

//Department Query
const deptQ = db.query(`SELECT * FROM department`,(err,result) => {
    if (err) {console.log(err)}
    console.table(result);
});

//Role Query
const roleQ = db.query(`SELECT * FROM role`,(err,result) => {
    if (err) {console.log(err)}
    console.table(result);
});

//Employee Query
const employeeQ = db.query(`SELECT * FROM employee`,(err,result) => {
    if (err) {console.log(err)}
    console.table(result);
});

