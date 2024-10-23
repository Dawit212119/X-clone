"use client";
import React, { useEffect, useState } from "react";

export default function News() {
  const [news, setnews] = useState([]);
  const [articleNum, setarticleNum] = useState(3);

  console.log(news);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setnews(data.articles));
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl flex-col p-3 text-gray-70 space-y-3 ">
      <h1 className="font-bold text-2xl">Whats happing</h1>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="flex space-x-1 items-center justify-between hover:bg-gray-200 transition duration-200 px-4 py-2 rounded-lg">
              <div className="space-x-0.5">
                <h6 className="font-bold">{article.title}</h6>
                <p className="text-sm italic">{article.source.name}</p>
              </div>
              <img src={article.urlToImage} width={90} className="rounded-md" />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setarticleNum(articleNum + 2)}
        className="bg-blue-400 w-full text-white font-semibold rounded-md p-2 hover:brightness-95"
      >
        Show more
      </button>
    </div>
  );
}
