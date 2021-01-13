import React from "react";

function dispatchCryptoCurrencies(action, value) {
  switch (action) {
    case "populateCryptoCurrencies":
      this.setState({ cryptoCurrencies: value });
      break;
    case "search":
      this.setState({ search: value });
      break;
    default:
      console.log("In CryptoCurrencies Context");
  }
}

const CryptoCurrenciesContext = React.createContext({
  cryptoCurrencies: [],
  dispatchCryptoCurrencies: () => {},
});

export { CryptoCurrenciesContext, dispatchCryptoCurrencies };
