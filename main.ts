#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 123;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("password is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "select one option",
      type: "list",
      choices: ["1000", "2000", "5000", "10000", "withdraw", "check balance"],
    },
  ]);
  console.log(operationAns.operation);

  if (operationAns.operation === "1000") {
    let ReAmount = (myBalance -= operationAns.operation);
    console.log(`"you remaining balance is:" ${ReAmount}`);
  }
  if (operationAns.operation === "2000") {
    let ReAmount = (myBalance -= operationAns.operation);
    console.log(`"you remaining balance is:" ${ReAmount}`);
  }
  if (operationAns.operation === "5000") {
    let ReAmount = (myBalance -= operationAns.operation);
    console.log(`"you remaining balance is:" ${ReAmount}`);
  }
  if (operationAns.operation === "10000") {
    let ReAmount = (myBalance -= operationAns.operation);
    console.log(`"you remaining balance is:" ${ReAmount}`);
  }

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "enter your amount",
      type: "number",
    });
    if (myBalance >= amountAns.amount) {
      myBalance -= amountAns.amount;
      console.log(`"you remaining Balance is:" ${myBalance}`);
    } else console.log("wrong amount, please try again");
  }
  if (operationAns.operation === "check balance") {
    console.log(`"you Balance is:" ${myBalance}`);
  }
} else {
  console.log("password is incorrect");
}
