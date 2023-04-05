import React from "react";

const RecCard = () => {
  return (
    <div className="flex justify-between py-2 px-4 border-b-2 pb-2">
      <h3 className="text-xl font-normal">Apple</h3>
      <div>
        <div className="flex gap-3">
          <p>Lowest Price</p>
          <p className="pr-4">285.6700</p>
        </div>
        <div className="flex gap-3">
          <p>Highest Price</p>
          <p className="pr-4">285.6700</p>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
