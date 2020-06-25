import calculateFullName from './calculateFullName';
import { Person } from './Person.model';
import { expect } from 'chai';

describe('calculateFullName', () => {
  validTest({ firstName: 'Tommy', lastName: 'Pickles' }, 'Tommy Pickles');
  validTest({ firstName: 'Jack-Jack', lastName: 'Parr' }, 'Jack-Jack Parr');

  function validTest(person: Person, expectedResult: string): void {
    it(`returns "${expectedResult}" when passed ${JSON.stringify(
      person
    )}`, () => {
      const actualResult = calculateFullName(person);
      expect(actualResult).to.equal(expectedResult);
    });
  }
});
