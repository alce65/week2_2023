import { factorial } from './factorial.js';

try {
  console.log(factorial(189));
} catch (error) {
  console.log(error.message);
}
