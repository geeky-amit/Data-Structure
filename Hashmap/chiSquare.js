let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let s = readLine();
  let map = {};
  for (let j = 0; j < s.length; j++) {
    if (!map[s[j]]) {
      map[s[j]] = 1;
    } else {
      map[s[j]] += 1;
    }
  }

  let ans = 0;
  let values = Object.values(map);

  values.forEach((e) => {
    if (e % 2 !== 0) {
      ans++;
    }
  });

  if (ans === 0) {
    console.log(0);
  } else {
    console.log(ans - 1);
  }
}
