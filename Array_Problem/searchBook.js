let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let libraryBooks = readLine().split(" ");
let userQueries = parseInt(readLine());

for (let i = 0; i < userQueries; i++) {
  let bookAvailbe = false;
  let query = readLine();
  for (let j = 0; j < libraryBooks.length; j++) {
    if (query === libraryBooks[j]) {
      console.log("Available");
      bookAvailbe = true;
      break;
    }
  }
  if (bookAvailbe === false) {
    console.log("Not Available");
  }
}
