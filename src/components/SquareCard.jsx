import React from "react";

const SquareCard = () => {
  return (
    <div className="col-span-1 rounded-lg shadow-sm hover:shadow-md m-2 duration-200 p-2 flex flex-col gap-1 text-md">
      <h1 className="mb-2 text-xl font-medium">Apple</h1>
      <div className="flex justify-between">
        <p className="font-light">Open Price</p>
        <p>287.2300</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Highet Price</p>
        <p>290.4499</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Lowest Price</p>
        <p>285.6700</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Stock Price</p>
        <p>287.1800</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Volume</p>
        <p>25824299</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Change</p>
        <p>-0.0174</p>
      </div>
    </div>
  );
};

export default SquareCard;
