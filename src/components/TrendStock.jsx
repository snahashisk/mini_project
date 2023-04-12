import React from "react";
import SquareCard from "./SquareCard";

const TrendStock = () => {
  const symbols = ["MSFT", "AAPL", "AMZN", "NVDA", "NKE"];

  let count = 0;
  return (
    <div className="rounded-lg h-full flex gap-2">
      {symbols.map((symbol) => (
        <SquareCard key={count++} name={symbol} />
      ))}
    </div>
  );
};

export default TrendStock;
