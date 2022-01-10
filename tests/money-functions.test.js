const coins = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("positive value 0 currency return $0.00", () => {
    expect(coins.formatCurrency(0)).toEqual("$0.00");
  });
  test("positive value 1 currency return $1.00", () => {
    expect(coins.formatCurrency(1)).toEqual("$1.00");
  });
  test("positive value 1.5 currency return $1.50", () => {
    expect(coins.formatCurrency(1.5)).toEqual("$1.50");
  });
  test("positive value 0.01 currency return $0.01", () => {
    expect(coins.formatCurrency(0.01)).toEqual("$0.01");
  });
  test("positive value 527.6789 currency return $527.68", () => {
    expect(coins.formatCurrency(527.6789)).toEqual("$527.68");
  });
  test("negative value -1.00 currency return $-1.00", () => {
    expect(coins.formatCurrency(-1)).toEqual("-$1.00");
  });
  test("negative value -3.5762 currency return $-3.5762", () => {
    expect(coins.formatCurrency(-3.5762)).toEqual("-$3.58");
  });
  test("negative value -9.09 currency return $-9.09", () => {
    expect(coins.formatCurrency(-9.099)).toEqual("-$9.10");
  });
});

describe("getCoins", () => {
  test("32 cents produces 1-quarters 0-dimes 1-nickel and 2-pennies", () => {
    expect(coins.getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("10 cents produces 0-quarter 1-dimes 0-nickel and 0-pennies", () => {
    expect(coins.getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
  test("27 cents produces 1-quarter 0-dimes 0-nickel and 2-pennies", () => {
    expect(coins.getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });
  test("68 cents produces 2-quarter 1-dimes 1-nickel and 3-pennies", () => {
    expect(coins.getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
  test("0 cents produce 0-quarter 0-dimes 0-nickel and 0-pennies", () => {
    expect(coins.getCoins(0)).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    });
  });
});
