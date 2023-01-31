const p1 = {
  name: 'Pepe',
  age: 22,
  // eslint-disable-next-line object-shorthand
  greetings: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

const p2 = {
  name: 'Ernesto',
  age: 25,
  // eslint-disable-next-line object-shorthand
  greetings: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greetings = function () {
  console.log(`Hola, soy ${this.name}`);
};

const p3 = new Person('Luisa', 34);
const p4 = new Person('Rosa', 64);

console.log(p1, p2, p3, p4);

p3.greetings();
