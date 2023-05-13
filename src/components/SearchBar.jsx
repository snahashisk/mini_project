import React, { useContext } from "react";
import myphoto from "../image/my-photo.jpg";
import { BellOutlined, BulbOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import StockSymbol from "../contexts/StockSymbol";
import NewsContext from "../contexts/NewsContext";
import LoginContext from "../contexts/LoginContext";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const location = useLocation();
  const API_KEY = "cgora21r01qlmgv23vd0cgora21r01qlmgv23vdg";
  const [symbol, setSymbol] = useState("");
  const [results, setResults] = useState([]);
  const [modalStyle, setModalStyle] = useState(
    "absolute bg-white h-1/2 overflow-y-scroll p-4 rounded-lg top-16 hidden z-40"
  );
  const { setStockSymbol } = useContext(StockSymbol);
  const { setNewsSymbol } = useContext(NewsContext);
  const { login } = useContext(LoginContext);
  const loginData = localStorage.getItem("loginData");
  const navigate = useNavigate();

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
    console.log(location.pathname);
  };

  const handleClear = () => {
    console.log(login);
    setResults([]);
    setModalStyle(
      "absolute bg-white h-1/2 overflow-y-scroll p-4 rounded-lg top-16 hidden z-40"
    );
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/search?q=${symbol}&token=${API_KEY}`
      );
      setResults(response.data.result);
      setModalStyle(
        "absolute bg-white h-1/2 overflow-y-scroll p-4 rounded-lg top-16 z-40 w-2/5"
      );
    } catch (error) {
      console.error(error);
    }
  };

  let keyCount = 0;

  return (
    <div className="flex justify-between px-8 bg-white py-5 ">
      <input
        type="text"
        value={symbol}
        className="bg-gray-200 focus:outline-none p-3 px-6 rounded-full block w-2/4 text-sm"
        onChange={handleSymbolChange}
      />
      <div className="flex gap-4 items-center -ml-80">
        <button
          onClick={handleClear}
          className="text-3xl text-gray-400  hover:text-gray-600 duration-200 rounded-full ml-4"
        >
          <AiFillCloseCircle />
        </button>
        <button
          onClick={handleSearch}
          className="text-2xl text-gray-700  hover:text-gray-600 duration-200 rounded-full"
        >
          <AiOutlineSearch />
        </button>
      </div>

      <ul className={modalStyle}>
        {results.map((result) => (
          <li
            key={keyCount++}
            className="cursor-pointer py-2 px-2 border-b-2 flex justify-between w-full hover:bg-blue-200 duration-200 rounded-md"
            onClick={() => {
              if (location.pathname === "/news") {
                setNewsSymbol(result.symbol);
              } else {
                setStockSymbol(result.symbol);
              }
              setModalStyle(
                "absolute bg-white h-1/2 overflow-y-scroll p-4 rounded-lg top-16 hidden z-40"
              );
              setResults([]);
            }}
          >
            <span className="mr-8">{result.description}</span>
            <span className="ml-8">{result.symbol}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center text-lg w-1/4 justify-end">
        <BellOutlined />
        <BulbOutlined />
        <img
          src={myphoto}
          className="w-10 rounded-full border-2 border-spacing-2"
          alt="Customer Avatar"
        />
        <p className="font-medium text-gray-600">{loginData}</p>
        <button
          className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm"
          onClick={() => {
            localStorage.removeItem("loginData");
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
