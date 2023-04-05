import React from "react";
import { SearchBar, TrendStock, Watchlist } from "../components";
const Home = () => {
  return (
    <div className="bg-gray-200 col-span-4 grid grid-cols-4 grid-rows-8">
      <SearchBar />
      <TrendStock />
      <div className="col-span-3 row-span-5 mt-2 m-4 bg-white rounded-lg p-3">
        Stock Chart and prediction
      </div>
      <Watchlist />
    </div>
  );
};

export default Home;
