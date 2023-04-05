import React from "react";
import myphoto from "../image/my-photo.jpg";
import { BellOutlined, BulbOutlined } from "@ant-design/icons";
const SearchBar = () => {
  return (
    <div className="col-span-4 row-span-1 bg-white flex items-center justify-between px-6">
      <input
        type="text"
        className="bg-gray-200 focus:outline-none p-3 px-6 rounded-full block w-1/2 text-sm"
      />
      <div className="flex gap-4 items-center text-lg">
        <BellOutlined />
        <BulbOutlined />
        <img
          src={myphoto}
          className="w-10 rounded-full border-2 border-spacing-2"
        />
        <p className="text-xl font-medium text-gray-600">Snahashis Kanrar</p>
      </div>
    </div>
  );
};

export default SearchBar;
