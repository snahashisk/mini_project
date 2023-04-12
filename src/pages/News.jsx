import { React, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchBar, NewsCard } from "../components";
import NewsContext from "../contexts/NewsContext";
import { getCurrentDate, getPreviousDate } from "../helper/getDate";

const News = () => {
  const [news, setNews] = useState([]);
  const [forexNews, setForexNews] = useState([]);
  const [companyNews, setCompanyNews] = useState([]);
  const { newsSymbol } = useContext(NewsContext);
  const debo_api = "cgoflmpr01qpst9taoi0cgoflmpr01qpst9taoig";

  useEffect(() => {
    setCompanyNews([]);
    axios
      .get(
        `https://finnhub.io/api/v1/company-news?symbol=${newsSymbol}&from=${getPreviousDate()}&to=${getCurrentDate()}&token=${debo_api}`
      )
      .then((response) => {
        setCompanyNews(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newsSymbol]);

  useEffect(() => {
    setCompanyNews([]);
    axios
      .get(`https://finnhub.io/api/v1/news?category=general&token=${debo_api}`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`https://finnhub.io/api/v1/news?category=forex&token=${debo_api}`)
      .then((response) => {
        setForexNews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="col-span-4 max-h-screen bg-gray-200 overflow-hidden">
      <div className="w-full h-20">
        <SearchBar />
      </div>
      <div className="bg-white m-4 flex flex-wrap justify-around h-5/6 p-2 overflow-y-scroll">
        {companyNews.map((article) => (
          <NewsCard
            category={article.category}
            time={article.datetime}
            headline={article.headline}
            image={article.image}
            summary={article.summary}
            url={article.url}
          />
        ))}
        {news.map((article) => (
          <NewsCard
            category={article.category}
            time={article.datetime}
            headline={article.headline}
            image={article.image}
            summary={article.summary}
            url={article.url}
          />
        ))}
        {forexNews.map((article) => (
          <NewsCard
            category={article.category}
            time={article.datetime}
            headline={article.headline}
            image={article.image}
            summary={article.summary}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
