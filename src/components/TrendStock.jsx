import React from "react";
import { useEffect, useState } from "react";
import SquareCard from "./SquareCard";
import axios from "axios";

const TrendStock = () => {
  const [quotesData, setQuotesData] = useState({});
  const symbols = ["MSFT", "AAPL", "AMZN", "NVDA", "NKE"];
  const apiKey = "cgo42t1r01qpst9t1lv0cgo42t1r01qpst9t1lvg";

  let count = 0;
  return (
    <div className="rounded-lg h-full flex gap-2">
      {symbols.map((symbol) => (
        <SquareCard
          key={count++}
          name={symbol}
          high={quotesData[symbol]?.["h"]}
          price={quotesData[symbol]?.["c"]}
          change={quotesData[symbol]?.["dp"]}
        />
      ))}
    </div>
  );
};

export default TrendStock;
