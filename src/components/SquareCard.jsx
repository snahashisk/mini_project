import React, { useState, useEffect } from "react";
import axios from "axios";

const SquareCard = ({ name }) => {
  const apiKey2 = "cgoflmpr01qpst9taoi0cgoflmpr01qpst9taoig";
  const [quote, setQuote] = useState({});
  const [companyName, setCompanyName] = useState(name);
  const [companyLogo, setCompanyLogo] = useState();

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
  }, []);

  let change_style;

  if (quote["dp"] < 0) {
    change_style = "pr-4 text-red-600 font-medium";
  } else {
    change_style = "pr-4 text-green-600 font-medium";
  }

  return (
    <div className="w-1/5 h-full p-3 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 hover:z-10 duration-200 cursor-pointer">
      <div className="flex items-center gap-2 mb-1">
        <img src={companyLogo} className="rounded-full w-9" />
        <h1 className="mb-2 text-lg font-normal text-blue-600">
          {companyName}
        </h1>
      </div>

      <div className="flex justify-between text-sm">
        <p>Highet Price</p>
        <p className="pr-4 text-blue-800">{quote["h"]}</p>
      </div>
      <div className="flex justify-between text-sm">
        <p>Current Price</p>
        <p className="pr-4">{quote["c"]}</p>
      </div>
      <div className="flex justify-between text-sm">
        <p>Change</p>
        <p className={change_style}>{quote["dp"]}</p>
      </div>
    </div>
  );
};

export default SquareCard;
