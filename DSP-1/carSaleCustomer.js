let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

class CarSell {
  sellPrice = [];

  setPrice(price) {
    this.sellPrice.push(price);
  }

  getPromisingCustomers() {
    let flag = true;
    for (let i = 0; i < this.sellPrice.length; i++) {
      if (this.sellPrice[i] >= 900000) {
        flag = false;
        console.log(i);
      }
    }

    if (flag) console.log(-1);
  }
}

let n = parseInt(readLine());
let carSell = new CarSell();

for (let i = 0; i < n; i++) {
  let price = parseInt(readLine());
  carSell.setPrice(price);
}
carSell.getPromisingCustomers();
