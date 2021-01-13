import React, { useState } from "react";


const CryptoCurrenciesContext = React.createContext([{}, () => {}]);

const CryptoCurrenciesProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <CryptoCurrenciesContext.Provider value={[state, setState]}>
      {props.children}
    </CryptoCurrenciesContext.Provider>
  );
};

export { CryptoCurrenciesContext, CryptoCurrenciesProvider };
