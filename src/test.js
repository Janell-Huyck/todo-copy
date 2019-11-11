function snapcrackle(maxValue) {
  for (i = 1; i <= maxValue; i++) {
    if (i == i) {
      console.log(isPrime(i));
    }

    if ((i % 2 !== 0) & (i % 5 == 0)) {
      console.log(i + " snapcrackle!");
    } else if (i % 2 != 0) {
      console.log(i + " Snap");
    } else if (i % 5 == 0) {
      console.log(i + " crackle");
    } else if (i % 2 == 0) {
      console.log(i + " ,");
    }
  }
}

console.log(snapcrackle(100));

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return console.log("");
    } else {
      return console.log(value + " is a Prime number!");
    }
  }

  return value > 1;
}
