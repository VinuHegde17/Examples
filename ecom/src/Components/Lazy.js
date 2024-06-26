import React from "react";
const stocks = [
  {
    company: "Twitter Inc",
    ticker: "TWTR",
    stockPrice: "22.76 USD",
    timeElapsed: "5 sec ago",
  },
  {
    company: "Square Inc",
    ticker: "SQ",
    stockPrice: "45.28 USD",
    timeElapsed: "10 sec ago",
  },
  {
    company: "Shopify Inc",
    ticker: "SHOP",
    stockPrice: "341.79 USD",
    timeElapsed: "3 sec ago",
  },
  {
    company: "Sunrun Inc",
    ticker: "RUN",
    stockPrice: "9.87 USD",
    timeElapsed: "4 sec ago",
  },
  {
    company: "Adobe Inc",
    ticker: "ADBE",
    stockPrice: "300.99 USD",
    timeElapsed: "10 sec ago",
  },
  {
    company: "HubSpot Inc",
    ticker: "HUBS",
    stockPrice: "115.22 USD",
    timeElapsed: "12 sec ago",
  },
];

function Lazy() {
  return (
    <div>
      {stocks.map((stock) => (
        <div>
          <h2 style={{ margin: 10 }}>{stock.company}</h2>
          <h4 style={{ margin: 10 }}>{stock.stockPrice}</h4>
        </div>
      ))}
    </div>
  );
}

export default Lazy;
