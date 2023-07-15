let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

let map = new Map();
let alreadyMet = new Map();

for (let i = 0; i < n; i++) {
  let [name, game] = readLine().trim().split(" ");

  if (!alreadyMet.has(name)) {
    if (map.has(game)) {
      map.set(game, 1 + map.get(game));
    } else {
      map.set(game, 1 + 0);
    }
    alreadyMet.set(name, true);
  }
}

let maxLikes = Math.max(...map.values());
let favSports = [];
for (let [key, value] of map) {
  if (value === maxLikes) {
    favSports.push(key);
  }
}

favSports.sort();
console.log(favSports[0]);

console.log(map.has("football") ? map.get("football") : 0);
