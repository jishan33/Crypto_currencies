import React, { useState, useContext } from "react";
import { CryptoCurrenciesContext } from ".././context/CryptoCurrenciesContext";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const CryptoCurrencies = (props) => {
  const [state, setState] = useContext(CryptoCurrenciesContext);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const getCryptoCurrencies = async (display) => {
    try {
      const response = await fetch("http://localhost:5000/crypto_currencies");
      const data = await response.json();
      await setCryptoCurrencies(data);
      setShowInfo(display);
      await setState(data);
    } catch (e) {
      console.error(e);
    }
  };
  const renderCryptoCurrencies = () => {
    return cryptoCurrencies.map((data, index) => {
      return (
        <div className="div ml-5" key={index}>
          <p>{data.Currency}</p>
          <p>{(Number(data.Open) - Number(data.Close)).toFixed(2)}</p>
          
          <p>{formattedDate(data.Date)}</p>
        </div>
      );
    });
  };
  const formattedDate = (date) => {
   return moment(date).format("YYYY-MM-DD");
  }
console.log(formattedDate(selectedDate))
  return (
    <div>
      <button
        onClick={() => getCryptoCurrencies(!showInfo)}
        className="btn btn-info m-5"
      >
        Show Crypto Currencies Data
      </button>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      {renderCryptoCurrencies()}
      {showInfo && renderCryptoCurrencies()}
    </div>
  );
};
export default CryptoCurrencies;
