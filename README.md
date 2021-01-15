## See Also
Backend available [here](https://github.com/jishan33/Crypto_currencies_server)


## To Run The Project

### Pre-requisite Tools
 - [NodeJS](https://nodejs.org/en/download/) (v12.13.1)
 - [MongoDB](https://www.mongodb.com/) (v4.4.2)


### Key Libraries Used
 - [React](https://reactjs.org/) Front end framework
 - [Jest](https://jestjs.io/) For running tests
 - [Enzyme](https://github.com/enzymejs/enzyme) For testing React components
 - [Mock Service Worker](https://mswjs.io/) For stubbing backend in tests
 - [Moment](https://momentjs.com/) For handling dates
 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NOTE: You will need to have the backend running first [see here](https://github.com/jishan33/Crypto_currencies_server)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Assumptions
 - Percentage price changes are calculated using close price
 - Times and dates are all in UTC
 - Market cap and volume provided as daily data (no further data manipulation required)
