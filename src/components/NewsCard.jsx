import { React } from "react";

const NewsCard = ({ category, time, headline, image, summary, url }) => {
  const dateObj = new Date(time * 1000);
  const date = dateObj.toLocaleString().split(",", 2)[0];
  return (
    <div className="w-1/4 m-1 rounded-lg shadow-lg h-fit overflow-hidden">
      <img src={image} className="rounded-t-lg" alt="company-logo" />
      <div className="p-4">
        <div className="flex justify-between pb-3">
          <p className="bg-red-600 text-white px-2 rounded-xl text-sm">
            {category}
          </p>
          <p>Date : {date}</p>
        </div>
        <p className="text-lg leading-6 pb-3">{headline}</p>
        <p className="pb-3 overflow-hidden h-36">{summary}</p>
        <div className="border-t-2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="text-blue-600 pt-3">Read more..</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
