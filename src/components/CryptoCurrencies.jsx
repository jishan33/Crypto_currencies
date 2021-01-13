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
      await setShowInfo(display);
      await setState(data);
    } catch (e) {
      console.error(e);
    }
  };
  const renderCryptoCurrencies = () => {
    return cryptoCurrencies.map((data, index) => {
      return (
        <tbody key={data._id}>
          <tr>
            <td>{index + 1}</td>
            <td>{data.Currency}</td>
            <td>{(Number(data.Open) - Number(data.Close)).toFixed(2)}</td>

            <td>{formattedDate(data.Date)}</td>
          </tr>
        </tbody>
      );
    });
  };
  const formattedDate = (date, addDays) => {
    let response = moment(date).format("YYYY-MM-DD");
    if (addDays) {
      const afterDate = moment(date, "DD-MM-YYY").add(addDays, "day")._d;
      response = moment(afterDate).format("YYYY-MM-DD");
    }
    return response;
  };

  const oneDayDifference = () => {
    return cryptoCurrencies.map((data, index) => {
      if (formattedDate(data.Date) === formattedDate(selectedDate)) {
        return (
          <tbody key={data._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{data.Currency}</td>
              <td>{"$ " + data.Close}</td>
              <td>{data.Currency}</td>

              <td>{(Number(data.Open) - Number(data.Close)).toFixed(2)}</td>

              <td>{formattedDate(data.Date)}</td>
            </tr>
          </tbody>
        );
      } else return <tbody key={data._id}></tbody>;
    });
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <button
        onClick={() => getCryptoCurrencies(!showInfo)}
        className="btn btn-info m-5"
      >
        Show Crypto Currencies Data
      </button>

      {showInfo && (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
              <th>Date</th>
            </tr>
          </thead>
          {oneDayDifference()}
        </table>
      )}
    </div>
  );
};
export default CryptoCurrencies;
