import React, { useState, useContext } from "react";
import { CryptoCurrenciesContext } from ".././context/CryptoCurrenciesContext";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const CryptoCurrencies = (props) => {
  const [context, setContext] = useContext(CryptoCurrenciesContext);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2019-12-04T00:00:00")
  );

  const formattedDate = (date, addDays) => {
    let response = moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
    if (addDays) {
      const afterDate = moment(date, "DD-MM-YYY").add(addDays, "day")._d;
      response = moment(afterDate).format("YYYY-MM-DD");
    }
    return response;
  };

  const getCryptoCurrencies = async () => {
    try {
      const date = formattedDate(selectedDate);
      const response = await fetch(
        `http://localhost:5000/crypto_currencies?date=${date}`
      );
      const data = await response.json();

      await setCryptoCurrencies(data);
      await setContext(data);
    } catch (e) {
      console.error(e);
    }
  };

  const loadedDate =
    cryptoCurrencies && cryptoCurrencies.length > 0 && cryptoCurrencies[0].Date;
  const showInfo = formattedDate(loadedDate) === formattedDate(selectedDate);



  const renderCryptoCurrencies = () => {
    return cryptoCurrencies.map((data, index) => {
      return (
        <tbody key={data._id}>
          <tr>
            <td>{index + 1}</td>
            <td>{data.Currency}</td>
            <td>{"$ " + data.Close}</td>
            <td>{data["24h"]}</td>
            <td>{data["7d"]}</td>
            <td>{data["1m"]}</td>
            <td>{data.Volume}</td>
            <td>{data["Market Cap"]}</td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div className="ml-5 mt-5">
      <DatePicker
        className="date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <button
        onClick={getCryptoCurrencies}
        className="btn btn-info m-5"
        type="button"
      >
        Show Crypto Currencies Data from selected date
      </button>

      {showInfo && (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24 Hours</th>
              <th>7 Days</th>
              <th>1 Month</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          {renderCryptoCurrencies()}
        </table>
      )}
    </div>
  );
};
export default CryptoCurrencies;
