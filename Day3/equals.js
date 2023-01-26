export const strictEquals = (a, b) => {
  if (Object.is(a, NaN)) return false;
  if (!a && !b) return true;
  return Object.is(a, b);
};
