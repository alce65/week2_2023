/* eslint-disable no-proto */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let mammal = { hasHair: true };
let human = { teeth: 32 };
human.__proto__ = mammal;
let gwen = { age: 19 };
gwen.__proto__ = human;
console.log(gwen.teeth);
console.log(gwen.hasHair);
gwen.teeth = 30;
console.log(gwen.teeth);
