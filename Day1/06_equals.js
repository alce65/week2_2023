const x = NaN;

if (Object.is(x, NaN)) {
  console.log('X es NaN');
}

isNaN(''); // true
Number.isNaN('' * 2); // false

if (x == 3) {
}

if (x === NaN) {
}
