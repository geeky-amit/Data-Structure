const { count } = require("console");
let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let costChocolate = parseInt(readLine());
let numberOfChocolate = parseInt(readLine());
let costIcecream = parseInt(readLine());
let noOfIcecream = parseInt(readLine());

let totalCost = costChocolate * numberOfChocolate + costIcecream * noOfIcecream;
console.log(totalCost);
