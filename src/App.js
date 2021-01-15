import React from "react";
import { Route, Switch } from "react-router-dom";
import { CryptoCurrenciesProvider } from "./context/CryptoCurrenciesContext";
import CryptoCurrencies from './components/CryptoCurrencies';
import NotFoundPage from './components/NotFoundPage';

import "./stylesheets/App.scss";

const App = () => {
  
  return (
    <CryptoCurrenciesProvider>
      <Switch>
        <Route exact path="/" component={CryptoCurrencies} />
        <Route component={NotFoundPage} />
      </Switch>
    </CryptoCurrenciesProvider>
  );
};

export default App;
