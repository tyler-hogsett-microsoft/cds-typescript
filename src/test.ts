import { expect } from 'chai';

describe('Array', () => {
  describe('.indexOf()', () => {
    it('returns -1 when the given value does not exist', () => {
      const result = [1, 2, 3].indexOf(4);
      expect(result).to.equal(-1);
    });

    it('returns the first index of the given value if the value exists in multiple locations', () => {
      const result = [1, 1, 1].indexOf(1);
      expect(result).to.equal(0);
    });

    validTest([1, 2, 3], 1, 0);
    validTest([1, 2, 3], 2, 1);
    validTest([1, 2, 3], 3, 2);

    validTest(['hello', 'world'], 'hello', 0);

    function validTest<T>(
      subject: T[],
      value: T,
      expectedResult: number
    ): void {
      it(`returns ${expectedResult} when indexOf(${value}) is called on [${subject}]`, () => {
        const result = subject.indexOf(value);
        expect(result).to.equal(expectedResult);
      });
    }
  });
});
