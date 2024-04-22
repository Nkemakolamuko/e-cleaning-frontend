function range(x) {
  return x;
}

function sum(from, to) {
  let total = 0;
  for (from; from <= to; from++) {
    total += from;
  }
  return total;
}

console.log(range(sum(1, 10))); // -> 55

const power = (base, exponent) => {
  let result = 1; // Initial value to multiply by - the exponent is to keep track of how many times the iteration will be done for
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result; // If i return nothing the function returns undefined
};

console.log(power(2, 10)); //=> 1024 (works)

// Triangle
let result = "";
for (let i = 1; i < 8; i++) {
  for (let j = 0; j < i; j++) {
    result += "#";
  }
  result += "\n";
}
// Well the above is my own version of looping a traingle - Eloquent JS Excercise
console.log(result);

// 8X8 Board Game
let size = 8;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// Min function
const min = (a, b) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};

console.log(min(12, 5));

// Recursive even determinant
const isEven = (n) => {
  if (n % 2 !== 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isEven(-1));
