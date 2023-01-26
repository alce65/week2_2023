/* eslint-disable arrow-body-style */
export const factorial = (n) => {
  if (n > 170)
    throw new Error('No se pueden calcular factoriales de este número');
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
