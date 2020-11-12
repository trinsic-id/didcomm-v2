import { expect } from "chai";
import { default as native } from "../index";

describe("Generate key tests", () => {
  it("should generate key", () => {
    let request = Buffer.from([16, 2]);

    var actual = native.generate_key(request);

    expect(actual).property("length").to.be.greaterThan(0);
  });
});