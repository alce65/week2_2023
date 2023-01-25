/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let age = 22;
age = 23;

function foo(p) {
  // Parámetros (reales)
  let z;
}

const x = 3;
foo(x); // Argumentos o parámetros formales

let answer = true;
// Daria TypeError
// answer.opposite = false;

// Daría ReferenceError
// console.log(noExisto);

console.log(Number.MAX_SAFE_INTEGER);
const c = 9_007_199_254_740_991;
console.log(-Number.MAX_VALUE * 9_007_199_254_740_991);

// Casting
let z = 3;
console.log(z + '4');
console.log(typeof z);
console.log('cuatro' * z);

// Casting Booleans
// Falsy
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(NaN));

// Truthy
console.log(Boolean({}));
console.log(Boolean([]));
