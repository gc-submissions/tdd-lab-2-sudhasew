function calculateChange(total, payment) {
  let paymentChange = payment - total;
  console.log(paymentChange);
  return +paymentChange.toFixed(2);
}
function isSufficientPayment(total, payment) {
  //   if (payment >= total) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return payment >= total;
}

function calculateTotal(itemsArray) {
  let sum = 0;
  for (let item of itemsArray) {
    sum += item.price;
  }
  return +sum.toFixed(2);
}

function addItem(itemsArray, name, price) {
  const newItem = { name: name, price: price };
  itemsArray.push(newItem);
  // console.log(itemsArray);
}

function removeItem(itemsArray, index) {
  console.log("before splice", itemsArray);
  itemsArray.splice(index, 1);
  console.log("after splice", itemsArray);
}
module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
