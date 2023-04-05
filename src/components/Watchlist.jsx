import React from "react";
import RecCard from "./RecCard";

const Watchlist = () => {
  return (
    <div className="h-full bg-white rounded-lg p-4">
      <h2 className="text-xl mb-4 px-4">My Watchlist</h2>
      <RecCard />
      <RecCard />
      <RecCard />
      <RecCard />
      <RecCard />
      <RecCard />
    </div>
  );
};

export default Watchlist;
