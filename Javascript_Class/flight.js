let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

class Flight {
  constructor(upTime, downTime) {
    this.upTime = upTime;
    this.downTime = downTime;
  }
  calculateFlight() {
    let uptime = this.upTime.split(":");
    let downtime = this.downTime.split(":");
    let totalTime = parseInt(downtime[0]) - parseInt(uptime[0]) - 1;
    totalTime =
      parseInt(totalTime * 60) +
      parseInt(downtime[1]) +
      (60 - parseInt(uptime[1]));
    return totalTime;
  }
}

let upTime = readLine();
let downTime = readLine();
let NewFlight = new Flight(upTime, downTime);
console.log(NewFlight.calculateFlight());
