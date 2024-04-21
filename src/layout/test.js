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
