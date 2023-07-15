let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function chessPlay(x, y, m) {
  if (m === 0) return 0;
  m--;
  let possXCoord = [x - 1, x - 2, x + 1, x + 2, x - 1, x - 2, x + 1, x + 2];
  let possYCoord = [y - 2, y - 1, y + 2, y + 1, y + 2, y + 1, y - 2, y - 1];

  for (let i = 0; i < possXCoord.length; i++) {
    if (
      possXCoord[i] > 0 &&
      possYCoord[i] > 0 &&
      possXCoord[i] < 11 &&
      possYCoord[i] < 11
    ) {
      let possiblePosCoord = possXCoord[i] + "," + possYCoord[i];
      if (m === 0) {
        possiblePos.set(possiblePosCoord, m);
      }
      chessPlay(possXCoord[i], possYCoord[i], m);
    }
  }
  return possiblePos.size;
}

let [i, j, m] = readLine().split(" ").map(Number);
let possiblePos = new Map();
console.log(chessPlay(i, j, m));
