import React, { Component } from "react";
import { CryptoCurrenciesContext, dispatchCryptoCurrencies } from "./context/CryptoCurrenciesContext";
import { Route, Switch } from "react-router-dom";
import CryptoCurrencies from "./components/CryptoCurrencies";
import "./stylesheets/App.scss";

class App extends Component {
  state = {
    cryptoCurrencies: [],
    dispatchCustomer: dispatchCryptoCurrencies.bind(this),
  };
  render() {
  
    return (
      <CryptoCurrenciesContext.Provider value={this.state}>
      <Switch>
        <Route exact path="/" component={CryptoCurrencies} />
      </Switch>
      </CryptoCurrenciesContext.Provider>
    );
  }
}

export default App;
