let a = 4;
let b = 5;
let c = 8;
let turn = 0;

if (a < b && a < c) {
  turn = a;
}
turn = turn + (a - b);

if ((c - b) % 2 === 0) {
  turn = turn + c / 2;
} else {
  turn = turn + (c - a) / 2 + 1;
}

console.log(turn);
