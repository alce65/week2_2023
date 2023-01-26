import { strictEquals } from './equals';
import { testCases } from './test.cases';

describe('Given strictEquals', () => {
  describe('When we have two parameters', () => {
    testCases.forEach((item) => {
      test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
        const r = strictEquals(item.a, item.b);
        expect(r).toBe(item.result);
      });
    });
  });

  describe.each(testCases)(
    'When we have two parameters',
    ({ a, b, label, result }) => {
      test(`When arguments are ${label}
            Then result should be ${result}`, () => {
        const r = strictEquals(a, b);
        expect(r).toBe(result);
      });
    }
  );
});
