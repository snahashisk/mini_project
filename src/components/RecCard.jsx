import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import StockSymbol from "../contexts/StockSymbol";

const RecCard = ({ name }) => {
  const apiKey2 = "cgoflmpr01qpst9taoi0cgoflmpr01qpst9taoig";
  const [quote, setQuote] = useState({});
  const [companyName, setCompanyName] = useState(name);
  const [companyLogo, setCompanyLogo] = useState();
  const { setStockSymbol } = useContext(StockSymbol);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${name}&token=${apiKey2}`)
        .then((response) => {
          const quotesdata = response.data;
          setQuote(quotesdata);
        });
    };

    const fetchDetails = async () => {
      await axios
        .get(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${name}&token=${apiKey2}`
        )
        .then((response) => {
          // Handle the API response here
          setCompanyName(response.data.name);
          setCompanyLogo(response.data.logo);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
    fetchDetails();
  }, [name]);

  let style;
  if (quote["dp"] < 0) {
    style = "text-red-600 font-medium";
  } else {
    style = "text-green-600 font-medium";
  }

  return (
    <div className="grid grid-cols-3 py-2 px-4 border-b-2 pb-2">
      <div className="col-span-2 flex items-center gap-2 w-full">
        <img
          src={companyLogo}
          alt="Company-logo"
          className="w-10 rounded-full hover:scale-125 duration-200 cursor-pointer"
          onClick={() => {
            setStockSymbol(name);
          }}
        />
        <h3 className="font-normal w-1/2 leading-5">{companyName}</h3>
      </div>

      <div className="col-span-1">
        <div className="flex justify-between w-full">
          <p>Price</p>
          <p className="">{quote["c"]}</p>
        </div>
        <div className="flex gap-3 justify-between w-full">
          <p>Change</p>
          <p className={style}>{quote["dp"]}</p>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
