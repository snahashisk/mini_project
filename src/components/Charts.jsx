import React from "react";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Charts = () => {
  const API_KEY = "VZGAT3CT2MZ04TOO";
  const SYMBOL = "IBM";
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${SYMBOL}&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const timeSeries = data["Monthly Time Series"];
        const formattedData = Object.entries(timeSeries).map(
          ([time, values]) => ({
            time,
            close: Number(values["4. close"]),
          })
        );
        setData(formattedData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 px-6">
      <div className="flex justify-between border-b-2 pb-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl">Apple Inc.</h2>
          <p>AAPL</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">$150.70</h2>
          <p className="font-thin">Last updated at 14:30</p>
        </div>
      </div>
      <ul className="flex justify-around py-2">
        <li className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white">
          1 Day
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white">
          1 Week
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white">
          1 Month
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white">
          3 Month
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-blue-600 text-xs text-white">
          1 Year
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-yellow-400 text-xs font-semibold">
          Predict
        </li>
        <li className="px-4 py-1 cursor-pointer rounded-full bg-red-600 text-white text-xs font-semibold">
          Train
        </li>
      </ul>
      <div>
        <LineChart
          width={730}
          height={340}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default Charts;
