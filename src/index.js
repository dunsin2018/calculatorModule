const basicOperations = require('./basicOperations');
const express = require('express');

const app = express();
const route = express.Router();
//const ans = basicOperations.sum(2, 4);
//console.log(ans);

//create a salary calculator
//input = salary
//output = salary - tax
//let tax be 20%

function salaryCalculator(grossSalary) {
    const percent = basicOperations.divide(20, 100);
    const tax = basicOperations.product(percent, grossSalary);
    return basicOperations.minus(grossSalary, tax);
}
route.get('/salaryCalculator/:salary', function(request, response) {

    const netSalary = salaryCalculator(request.params.salary);
    const msg = 'Net Salary is ' + netSalary;

    response.send(msg);
});


route.get('/', function(request, response) {
    response.send("welcome to haruna app");
})

app.use(route);
app.listen(8082);
//console.log(salaryCalculator(10000));