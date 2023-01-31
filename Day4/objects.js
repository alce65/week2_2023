/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
const sherlock = {
  sureName: 'Holmes',
};

// Error console.log(age); // ReferenceError
console.log(sherlock.sureName.foo);

console.log(sherlock.age?.foo);
let captain = 'Pepe';
const ship = { captain };

const double = ([...array]) => {
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line operator-assignment
    array[i] = 2 * array[i];
  }

  return array;
};

const aData = [1, 3, 5, [1, 3]];
double([...aData]);
double(JSON.parse(JSON.stringify(aData)));
console.log(aData);

const obj = { name: 'Pepe', age: 22 };

console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
