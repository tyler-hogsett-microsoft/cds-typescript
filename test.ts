import { expect } from 'chai';

var assert = require('assert');

describe('Array', () => {
  describe('.indexOf()', () => {
    it('returns -1 when the given value does not exist', () => {
      const result = [1, 2, 3].indexOf(4);
      expect(result).to.equal(-1);
    });

    it('returns the correct index when the given value does exist', () => {
      const result = [1, 2, 3].indexOf(1);
      expect(result).to.equal(0);
    });

    it('returns the first index of the given value if the value exists in multiple locations', () => {
      var result = [1, 1, 1].indexOf(1);
      expect(result).to.equal(0);
    });
  });
});
