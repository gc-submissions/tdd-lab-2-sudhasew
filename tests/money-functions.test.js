const getCoins = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test.todo("add formatCurrency tests here");
});

describe("getCoins", () => {
  test("32 cents produce 1-quarters 0-dimes 1-nickel and 2-pennies", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("10 cents produce 0-quarter 1-dimes 0-nickel and 0-pennies", () => {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
  test("27 cents produce 1-quarter 0-dimes 0-nickel and 2-pennies", () => {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });
  test("68 cents produce 2-quarter 1-dimes 1-nickel and 3-pennies", () => {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
  test("0 cents produce 0-quarter 0-dimes 0-nickel and 0-pennies", () => {
    expect(getCoins(0)).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    });
  });
});
