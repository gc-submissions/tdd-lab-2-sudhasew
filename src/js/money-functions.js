function formatCurrency(amount) {
  //return amount;
  if (amount >= 0) {
    amount = amount.toFixed(2);
    console.log("positive amount", amount);
    return `$${amount}`;
  } else {
    amount = amount.toFixed(2);
    console.log("negative amount", amount);
    return `-$${amount.substr(1)}`; //`-$${amount.substr(1, 4)}`
  }
}

function getNumberOfCoins(cents, coinAmount) {
  let coins = 0;
  while (true) {
    coins++;

    let remaining = cents - coins * coinAmount;
    if (remaining === 0) {
      return coins;
    } else if (remaining < 0) {
      return coins - 1;
    }
  }
}
function getCoins(cents) {
  const quarters = getNumberOfCoins(cents, 25);
  const dimes = getNumberOfCoins(cents - quarters * 25, 10);
  const nickels = getNumberOfCoins(cents - quarters * 25 - dimes * 10, 5);
  const pennies = getNumberOfCoins(
    cents - quarters * 25 - dimes * 10 - nickels * 5,
    1
  );
  return {
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies,
  };
}
module.exports = { getCoins, formatCurrency };
