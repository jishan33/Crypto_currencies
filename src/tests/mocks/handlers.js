import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/crypto_currencies", (request, response, context) => {
    if(request.url.search.startsWith('?date=')) {  
     
      
      return response(context.status(200), context.json(goodResponse));
    } else {
      return response(context.status(400))
    }
  }),
];

const goodResponse = [
  {
    _id: "60000739aa3e7e7632c7e45b",
    Currency: "bitcoin",
    Date: "2019-12-04T00:00:00.000Z",
    Open: "7,320.13",
    High: "7,539.78",
    Low: "7,170.92",
    Close: "7,252.03",
    Volume: "21,664,240,918",
    "Market Cap": "131,143,073,943",
    "24h": "0.1 %",
    "7d": "-1.4 %",
  },
  {
    _id: "60000739aa3e7e7632c7e527",
    Currency: "ethereum",
    Date: "2019-12-04T00:00:00.000Z",
    Open: "147.92",
    High: "150.68",
    Low: "145",
    Close: "146.75",
    Volume: "7,865,937,094",
    "Market Cap": "15,966,157,442",
    "24h": "0.8 %",
    "7d": "0.3 %",
  },
];
