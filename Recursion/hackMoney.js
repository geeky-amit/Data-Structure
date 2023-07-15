let fs = require("fs");

let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function hackMoney(startMoney, targetMoney) {
  if (startMoney === targetMoney) return 1;
  if (startMoney > targetMoney) return 0;
  return (
    hackMoney(startMoney * 10, targetMoney) ||
    hackMoney(startMoney * 20, targetMoney)
  );
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let targetMoney = parseInt(readLine());
  let res = hackMoney(1, targetMoney);

  if (res === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
