import React, { useState, useContext } from "react";
import { CryptoCurrenciesContext } from ".././context/CryptoCurrenciesContext";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const CryptoCurrencies = (props) => {
  const [state, setState] = useContext(CryptoCurrenciesContext);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2019-12-04T00:00:00")
  );

  const getCryptoCurrencies = async (display) => {
    try {
      const date = formattedDate(selectedDate);
      const response = await fetch(
        `http://localhost:5000/crypto_currencies?date=${date}`
      );
      const data = await response.json();
      await setCryptoCurrencies(data);
      await setShowInfo(display);
      await setState(data);
    } catch (e) {
      console.error(e);
    }
  };

  const formattedDate = (date, addDays) => {
    let response = moment(date).startOf("date").format("YYYY-MM-DD");
    if (addDays) {
      const afterDate = moment(date, "DD-MM-YYY").add(addDays, "day")._d;
      response = moment(afterDate).format("YYYY-MM-DD");
    }
    return response;
  };

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
            <td>{data.Volume}</td>
            <td>{data["Market Cap"]}</td>
            <td>{data.Date}</td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div>
      <p>Australian Eastern Standard Time (AEST)</p>
      <DatePicker
        className= "date-picker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <button
        onClick={() => getCryptoCurrencies(!showInfo)}
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
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
              <th>Date</th>
            </tr>
          </thead>
          {renderCryptoCurrencies()}
        </table>
      )}
    </div>
  );
};
export default CryptoCurrencies;
