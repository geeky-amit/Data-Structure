let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
class Biller {
  totalBill;
  constructor() {
    this.totalBill = 0;
  }
  addToBill(price) {
    this.totalBill = this.totalBill + price;
  }
  removeFromBill(price) {
    this.totalBill = this.totalBill - price;
  }
  getBill() {
    return this.totalBill;
  }
}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
let biller = new Biller();
for (let i = 0; i < n; i++) {
  let input = readLine().split(" ");
  let type = input[0];
  let price = parseInt(input[1]);
  if (type === "+") {
    biller.addToBill(price);
  } else {
    biller.removeFromBill(price);
  }
}
console.log(biller.getBill());
