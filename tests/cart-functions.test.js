const cartFunctions = require("./../src/js/cart-functions");

describe("calculateChange", () => {
  test("should return 1 when given 5 and 6", () => {
    expect(cartFunctions.calculateChange(5, 6)).toEqual(1);
  });
});

test("should return .73 when given 12.3 and 13.03", () => {
  expect(cartFunctions.calculateChange(12.3, 13.03)).toEqual(0.73);
});

test("should return 8 when given 78 and 100", () => {
  expect(cartFunctions.calculateChange(78, 100)).toEqual(22);
});

describe("isSufficientPayment", () => {
  test("should return true if total is 5 and payment is 6", () => {
    expect(cartFunctions.isSufficientPayment(5, 6)).toEqual(true);
  });
  test("should return false if total is 10 and payment is 7", () => {
    expect(cartFunctions.isSufficientPayment(10, 7)).toEqual(false);
  });
  test("should return true if total is 3 and payment is 3", () => {
    expect(cartFunctions.isSufficientPayment(3, 3)).toEqual(true);
  });
  test("should return false if total is 2.55 and payment is 2.55", () => {
    expect(cartFunctions.isSufficientPayment(2.55, 2.55)).toEqual(true);
  });
});

describe("calculateTotal", () => {
  test("should return a total of 4.99 with one item of costing 4.99", () => {
    const mockItemsArray = [{ name: "Taco", price: 4.99 }];
    expect(cartFunctions.calculateTotal(mockItemsArray)).toEqual(4.99);
  });
  test("should return a total of 4.99 with one item of costing 4.99", () => {
    const mockItemsArray = [{ name: "Taco", price: 4.99 }];
    expect(cartFunctions.calculateTotal(mockItemsArray)).toEqual(4.99);
  });
  test("should return a total of 4.99 with one item of costing 4.99", () => {
    const mockItemsArray = [
      { name: "Taco1", price: 3.5 },
      { name: "Taco2", price: 12.99 },
      { name: "Taco3", price: 0.03 },
    ];
    expect(cartFunctions.calculateTotal(mockItemsArray)).toEqual(16.52);
  });
});

describe("addItem", () => {
  test("should return empty itemsArray with name and price", () => {
    const emptyArray = [];
    const name = "Beans";
    const price = 3;
    const result = cartFunctions.addItem(emptyArray, name, price);
    expect(result).toEqual(result);
  });

  // test("should return an itemsArray with one item in it", () => {
  //   const itemsInArray = [{ name: "Beans", price: 3 }];
  //   expect(cartFunctions.addItem(itemsInArray, "Sugar", 2));
  // });

  // test("should return an itemsArray with one item in it", () => {
  //   const itemsInArray2 = [
  //     { name: "Beans", price: 3 },
  //     { name: "Sugar", price: 2 },
  //   ];
  //   expect(cartFunctions.addItem(itemsInArray2, "Oil", 5));
  // });
});

// describe("removeItem", () => {
//   test("removing the first element ", () => {
//     const arrayItems = [
//       { name: "Jelly", price: 3 },
//       { name: "Cake", price: 5 },
//       { name: "Candy", price: 2 },
//     ];
//     expect(cartFunctions.removeItem(arrayItems, 0));
//   });
//   test("removing the last element", () => {
//     const arrayItems = [
//       { name: "Jelly", price: 3 },
//       { name: "Cake", price: 5 },
//       { name: "Candy", price: 2 },
//     ];
//     expect(cartFunctions.removeItem(arrayItems, 2));
//   });
//   test("removing the middle or second element", () => {
//     const arrayItems = [
//       { name: "Jelly", price: 3 },
//       { name: "Cake", price: 5 },
//       { name: "Candy", price: 2 },
//     ];
//     expect(cartFunctions.removeItem(arrayItems, 1));
//   });
// test("removing the element from an array of one item", () => {
//   const arrayItems = [{ name: "Jelly", price: 3 }];
//   expect(cartFunctions.removeItem(arrayItems, 1));
// });
//});
