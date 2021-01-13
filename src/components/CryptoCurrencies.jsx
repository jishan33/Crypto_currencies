import React, { useState, useContext } from "react";
import { CryptoCurrenciesContext } from ".././context/CryptoCurrenciesContext";

const CryptoCurrencies = (props) => {
  const context = useContext(CryptoCurrenciesContext);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const getCryptoCurrencies = async (display) => {
    try {
      const response = await fetch("http://localhost:5000/crypto_currencies");
      const data = await response.json();
      await setCryptoCurrencies(data);
      context.dispatchCryptoCurrencies("populateCryptoCurrencies", data);
    } catch (e) {
      console.error(e);
    }
  };
  const renderCryptoCurrencies = ()=> {
    return cryptoCurrencies.map((data, index)=> {
      return (
         <div className="div" key={index}>
          <p>Currency: {data.Currency}</p>
          <p>Date: {data.Date}</p>
          </div>
      )
    })
  }

  return(
    <div>
     
    </div>
  )
};
export default CryptoCurrencies;