let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie {
  constructor(length_in_minutes, num_characters, language) {
    this.length_in_minutes = length_in_minutes;
    this.num_characters = num_characters;
    this.language = language;
  }
  run() {
    return `This is a ${this.language} movie with ${this.num_characters} characters and is ${this.length_in_minutes} minutes long.`;
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie = new Movie(lengthInMinutes, numCharacters, language);
console.log(movie.run());
