let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

class BankAccount {
  constructor() {
    this.accountBalence = 0;
  }
  balance() {
    return this.accountBalence;
  }

  credit(transactionAmount) {
    this.accountBalence += transactionAmount;
  }
  debit(transactionAmount) {
    this.accountBalence -= transactionAmount;
  }
}

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount);
  } else {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance());
