import React from "react";
import RecCard from "./RecCard";

const Watchlist = () => {
  const symbols = ["TSLA", "META", "V", "WMT", "JPM", "PEP"];

  let count = 0;
  return (
    <div className="h-full bg-white rounded-lg p-4">
      <h2 className="text-xl mb-4 px-4">My Watchlist</h2>
      {symbols.map((symbol) => (
        <RecCard key={count++} name={symbol} />
      ))}
    </div>
  );
};

export default Watchlist;
