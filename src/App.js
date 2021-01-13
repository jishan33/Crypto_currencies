import React from "react";
import { Route, Switch } from "react-router-dom";
import { CryptoCurrenciesProvider } from "./context/CryptoCurrenciesContext";
import CryptoCurrencies from './components/CryptoCurrencies';
import "./stylesheets/App.scss";

const App = () => {
  
  return (
    <CryptoCurrenciesProvider>
      <Switch>
        <Route exact path="/" component={CryptoCurrencies} />
      </Switch>
    </CryptoCurrenciesProvider>
  );
};

export default App;
