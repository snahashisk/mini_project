import React from "react";

const SquareCard = () => {
  return (
    <div className="w-1/5 h-full p-3 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:z-10 duration-200 cursor-pointer">
      <h1 className="mb-2 text-xl font-medium">Apple</h1>
      <div className="flex justify-between">
        <p>Highet Price</p>
        <p className="pr-4">290.4499</p>
      </div>
      <div className="flex justify-between">
        <p>Lowest Price</p>
        <p className="pr-4">285.6700</p>
      </div>
      <div className="flex justify-between">
        <p>Lowest Price</p>
        <p className="pr-4">285.6700</p>
      </div>
    </div>
  );
};

export default SquareCard;
