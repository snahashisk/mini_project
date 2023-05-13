import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { StockDetail } from "./index";
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai";
import StockSymbol from "../contexts/StockSymbol";

const Charts = () => {
  // const API_KEY = "VZGAT3CT2MZ04TOO";
  const FINNHUB_API = "cgora21r01qlmgv23vd0cgora21r01qlmgv23vdg";
  const [data, setData] = useState([]);
  const { stockSymbol } = useContext(StockSymbol);
  const SYMBOL = stockSymbol;
  const [price, setPrice] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [company, setCompany] = useState({});
  const [resolution, setResolution] = useState("W");

  const currentDate = new Date();
  const currentTimestamp = Math.floor(currentDate.getTime() / 1000);

  const date = new Date("January 1, 2014");
  const oldTimestamp = Math.floor(date.getTime() / 1000);

  const getData = () => {
    fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${SYMBOL}&resolution=${resolution}&from=${oldTimestamp}&to=${currentTimestamp}&token=${FINNHUB_API}`
    )
      .then((response) => response.json())
      .then((data) => {
        const closePrices = data.c;
        const timestamps = data.t;
        const formattedData = timestamps.map((time, index) => ({
          time: new Date(time * 1000).toISOString(),
          close: closePrices[index],
        }));
        setData(formattedData);
      });
  };

  const getPredictData = () => {
    fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symbol: SYMBOL }),
    })
      .then((response) => response.json())
      .then((data) => {
        const parsedData = JSON.parse(data);
        const formattedData = parsedData.map((item) => ({
          time: new Date(item.Date).toISOString(),
          close: item.Close,
        }));

        setData(formattedData);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const getDetails = async () => {
    const response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${SYMBOL}&token=${FINNHUB_API}`
    );
    setPrice(response.data.c);
  };

  const fetchCompanyName = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${SYMBOL}&token=${FINNHUB_API}`
      );
      setCompanyName(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyDetails = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${FINNHUB_API}`
      );
      setCompany(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    getDetails();
    fetchCompanyName();
  }, [stockSymbol]);

  useEffect(() => {
    getData();
  }, [resolution]);

  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    fetchCompanyDetails();
    setModalOpen(true);
    console.log(company.weburl);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  if (data.length < 10) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl">Loading Data...</p>
      </div>
    );
  }
  return (
    <div className="p-4 px-6">
      <div className="flex justify-between border-b-2 pb-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl flex items-center">
            {companyName}
            <span
              className="inline-block pl-2 text-2xl text-gray-400 cursor-pointer"
              onClick={handleOpenModal}
            >
              <AiOutlineInfoCircle />
            </span>
          </h2>
          <p>{SYMBOL}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium">
            <span className="font-normal">Price</span> : {price} $
          </h2>
          <p className="font-thin">Last updated at 14:30</p>
          <StockDetail open={modalOpen} onClose={handleCloseModal}>
            <div className="flex gap-4 pb-4 border-b-2 relative">
              <img
                src={company.logo}
                alt="company-logo"
                className="w-1/6 rounded-md"
              />
              <div className="flex flex-col">
                <h2 className="text-3xl mb-1">{company.name}</h2>
                <p className="">{company.ticker}</p>
              </div>
              <AiOutlineClose
                className="text-xl text-gray-400 cursor-pointer absolute right-0 top-0"
                onClick={handleCloseModal}
              />
            </div>
            <p className="pt-3">{company.description}</p>
            <p>Industry: {company.finnhubIndustry}</p>
            <p>IPO: {company.ipo}</p>
            <p>Exchange: {company.exchange}</p>
            <p>Market Capitalization: {company.marketCapitalization}</p>
            <p className="border-b-2 pb-3">
              Total Share: {company.shareOutstanding}
            </p>
            <a href={company.weburl} target="_blank" rel="noopener noreferrer">
              <button className="text-blue-600 pt-3 outline-none">
                Visit Website..
              </button>
            </a>
          </StockDetail>
        </div>
      </div>
      <ul className="flex justify-around py-2">
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white"
          onClick={() => {
            setResolution("30");
          }}
        >
          1 Day
        </li>
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white"
          onClick={() => {
            setResolution("60");
          }}
        >
          1 Week
        </li>
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white"
          onClick={() => {
            setResolution("D");
          }}
        >
          1 Month
        </li>
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white"
          onClick={() => {
            setResolution("W");
          }}
        >
          3 Month
        </li>
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white"
          onClick={() => {
            setResolution("M");
          }}
        >
          1 Year
        </li>
        <li
          className="px-4 py-1 cursor-pointer rounded-full bg-yellow-400 text-xs font-semibold"
          onClick={getPredictData}
        >
          Predict
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-red-600 text-white text-xs font-semibold">
          Train
        </li>
      </ul>
      <div>
        <AreaChart
          width={730}
          height={340}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#800080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            fill="#8884d8"
            dot={false}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Charts;
