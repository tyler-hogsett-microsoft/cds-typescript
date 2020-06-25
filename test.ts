var assert = require("assert");

describe("Array", () => {
    describe(".indexOf()", () => {
        it("returns -1 when the given value does not exist", () => {
            assert.equal(
                [1, 2, 3].indexOf(4),
                -1
            );
        });

        it("returns the correct index when the given value does exist", () => {
            assert.equal(
                [1, 2, 3].indexOf(1),
                0
            );
        });

        it("returns the first index of the given value if the value exists in multiple locations", () => {
            assert.equal(
                [1, 1, 1].indexOf(1),
                0
            );
        });
    });
});