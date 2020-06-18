var assert = require("assert");

describe("Array", () => {
    describe("#indexOf()", () => {
        it("returns -1 when the given value does not exist", () => {
            assert.equal(
                [1, 2, 3].indexOf(4),
                -1
            );
        });

        it("return the correct index when the given value does exist", () => {
            assert.equal(
                [1, 2, 3].indexOf(1),
                0
            );
        });
    });
});