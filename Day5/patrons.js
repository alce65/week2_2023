/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
// Literal

const obj = { breed: 'huscky' };
const objChild = Object.create(obj);
console.log(obj.hasOwnProperty('foo'));
console.log(objChild.breed);

// Factory

function createFoo() {
  // TO DO ....
  return { foo: 'foo' };
}

const arrowCreate = () => ({});

// Patron constructor

// Patrones de ejecucion

function bar() {
  console.log('Soy bar');
}

// Uso: patron function

bar();

// Uso: patron method

const obj345 = {
  // eslint-disable-next-line object-shorthand
  tururu: bar,
};

obj345.tururu();

// Uso patron constructor

// eslint-disable-next-line new-cap
const newObject = new bar();
// - crea un objeto
// su __proro__ es el protortype de la función
// - lo usa como this dentro de la funcion
// - lo retorna
