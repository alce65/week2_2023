// Primitivos

console.log(6, typeof 6);
console.log('Pepe', typeof 'Pepe');
console.log(true, typeof true);

console.log(undefined, typeof undefined);
console.log(null, typeof null);

console.log(5n, typeof 5n);
// eslint-disable-next-line symbol-description
console.log(Symbol(), typeof Symbol());

// Referenciados - Objetos
console.log({}, typeof {});
console.log([], typeof []);
console.log(new Date(), typeof new Date());
console.log(/a/i, typeof /a/i);
console.log(() => {}, typeof (() => {}));

[].map();
'pepe'.toUpperCase();
