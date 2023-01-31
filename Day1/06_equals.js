const x = NaN;

if (Object.is(x, NaN)) {
  console.log('X es NaN');
}

isNaN(''); // Da true
Number.isNaN('' * 2); // Da false

// Eslint avisa del uso de ==
// if (x == 3) {
// }

// eslint-disable-next-line use-isnan
if (x === NaN) {
  // Code for the if
}
