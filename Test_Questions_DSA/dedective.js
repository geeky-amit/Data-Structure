let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  let map = {};
  let str1 = readLine();
  let str2 = readLine();

  for (let j = 0; j < str1.length; j++) {
    let key = str1[j];
    if (map[key] === undefined) {
      map[key] = 1;
    } else {
      map[key] = map[key] + 1;
    }
  }

  let flag = 0;
  for (let j = 0; j < str2.length; j++) {
    let key = str2[j];

    if (map[key]) {
      map[key] -= 1;
      flag++;
    }
  }

  if (flag === str2.length) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
