export const testCases = [
  // NaN === NaN return false, although Object.is(NaN,NaN) return true
  { a: NaN, b: NaN, label: 'NaN v. NaN', result: false },
  { a: NaN, b: 1, label: 'NaN v. 1', result: false },
  // 0 === -0 return true, although Object.is(0,-0) return false
  { a: 0, b: -0, label: '0 v. -0', result: true },
  { a: -0, b: 0, label: '-0 v. 0', result: true },
  { a: -0, b: 1, label: '-0 v. 1', result: false },
  { a: 1, b: -0, label: '1 v. -0', result: false },
  // Standard cases with 0
  { a: 0, b: 0, label: '0 v. 0', result: true },
  { a: 0, b: 1, label: '0 v. 1', result: false },
  // Standard cases
  { a: 1, b: '1', label: '1 v. "1"', result: false },
  { a: 1, b: 1, label: '1 v. 1', result: true },
  { a: true, b: false, label: 'true v. false', result: false },
  { a: false, b: false, label: 'false v. false', result: true },
  { a: 'water', b: 'oil', label: 'water v. oil', result: false },
  { a: '', b: '', label: '"" v ""', result: true },
  {
    a: undefined,
    b: undefined,
    label: 'undefined v. undefined',
    result: true,
  },
  { a: null, b: null, label: 'null v. null', result: true },
  { a: {}, b: {}, label: '{} v. {}', result: false },
];
