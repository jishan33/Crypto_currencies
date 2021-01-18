# Crypto Currencies Client

## See Also
Backend available [here](https://github.com/jishan33/Crypto_currencies_server)

## Pre-requisites
 - [NodeJS](https://nodejs.org/en/download/) (v12.13.1)

## Running the app
 - `npm install` to install dependencies
 - `npm test` to run tests
 - `npm start` starts the app (note: assumes [backend](https://github.com/jishan33/Crypto_currencies_server) is running)

## Key Libraries Used
 - [React](https://reactjs.org/) Front end framework
 - [Jest](https://jestjs.io/) For running tests
 - [Enzyme](https://github.com/enzymejs/enzyme) For testing React components
 - [Mock Service Worker](https://mswjs.io/) For stubbing backend in tests
 - [Moment](https://momentjs.com/) For handling dates
 
## Assumptions
 - Percentage price changes are calculated using close price
 - Times and dates are all in UTC
 - Market cap and volume provided as daily data (no further data manipulation required)
