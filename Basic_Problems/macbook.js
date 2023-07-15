const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = parseInt(readLine());
let lifespan = 0;
for (let i = 0; i < num; i++) {
  let mac = parseInt(readLine());
  if (mac >= 0) {
    lifespan += mac;
  }
}

console.log(parseInt(lifespan));
