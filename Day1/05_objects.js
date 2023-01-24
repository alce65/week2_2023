/* eslint-disable no-unused-vars */

const obj = { 0: 'Pepe', foo: 'algo', 1: 24 };
// Equivale a const obj1 = new Object()
const aData = ['Pepe', 22];
console.log(obj);
console.log(aData);

console.log(obj.foo);
console.log(obj[0]);
// eslint-disable-next-line dot-notation
console.log(obj['foo']);
aData.push(true);
console.log(aData);
aData.foo = 'Ohhh';
console.log(aData[3]);

const func = () => {};
func.prop = 23;
console.log(func);
