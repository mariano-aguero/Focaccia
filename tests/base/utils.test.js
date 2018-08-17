const assert = require('assert');
const {stringUtils} = require("../../src/utils");

describe("String Utils", () => {
    describe("trim", () => {
        it("Should remove the character located on the right", () => {
            let value = "hello/";
            let expected = "hello";
            let result = stringUtils.trim(value, "/");

            assert(result, expected);
        });
    });

    describe("left trim", () => {
        it("Should remove the character located on the left", () => {
            let value = "/hello";
            let expected = "hello";
            let result = stringUtils.ltrim(value, "/");

            assert(result, expected);
        });
    });
});