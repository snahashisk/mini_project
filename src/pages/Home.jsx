import React from "react";
import { SearchBar, TrendStock, Watchlist } from "../components";
const Home = () => {
  return (
    <div className="col-span-4 max-h-screen bg-gray-200">
      <div className="w-full h-20">
        <SearchBar />
      </div>
      <h1 className="m-4 text-2xl">Trending Stocks</h1>
      <div className="m-4 p-4 bg-white rounded-lg h-1/5">
        <TrendStock />
      </div>
      <div className="flex gap-4 m-4 pb-4 overflow-hidden h-3/5">
        <div className="bg-teal-200 w-4/6 rounded-lg">Charts</div>
        <div className="bg-yellow-200 w-2/6 rounded-lg">
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Home;
