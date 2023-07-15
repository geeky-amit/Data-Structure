let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let names = readLine().split(" ");

let happiness = readLine().split(" ");
console.log(names, happiness);
let happiness_sum = 0;
for (let i = 0; i < happiness.length; i++) {
  if (names[i] == "boss" || names[i] == "Boss") {
    happiness_sum += parseInt(happiness[i]) * 2;
  } else {
    happiness_sum += parseInt(happiness[i]);
  }
}
console.log(happiness_sum);
let happinessRating = happiness_sum / names.length;
console.log(happinessRating.toFixed(1));
if (happinessRating <= 5) {
  console.log("They fired me");
} else {
  console.log("I still have a job");
}
