/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const aData = [10, 20, 30, 34];
const userName = 'Elefante';

console.log(aData[1]);
console.log(userName[2]);

// No reasignable
// aData = [10, 20, 30, 34];

aData[1] = 56;
console.log(aData[1]);

// Esto da un TypeError
// userName[2] = 'a';
// No reasignable
// userName = 'Elafante'
console.log(userName[2]);

for (let i = 0; i < aData.length; i++) {
  aData[i] += 1;
}

console.log(aData);

Object.freeze(aData);
// Daría TypeError
// aData[0] = 23;

let foo;
console.log(typeof foo);
foo = 12;
console.log(typeof foo);
foo = '';
console.log(typeof foo);

const obj = { name: 'Ernesto' };
obj.age = 22;
obj.foo = undefined;
console.log(obj);
delete obj.foo;
console.log(obj);
