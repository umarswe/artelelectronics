import { useEffect, useState } from "react";
import NewsBox from "../../Shared/NewsBox";
import "./style.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://mystage.artelelectronics.com/api/v1/news/")
      .then((res) => res.json())
      .then((data) => setNews(data.results));
  }, []);

  return (
    <div className="news">
      <div className="news__navbar">
        <h1 className="news__navbar-title">Новости</h1>
        <div className="news__navbar-wrapper">
          <ul className="news__navbar-wrapper_links">
            <li>Все новости</li>
            <li>Статьи</li>
            <li>Мероприятия</li>
          </ul>
          <select className="news__navbar-wrapper_years">
            <option>Все года</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
      </div>

      <div className="news__container">
        {news.map((data) => (
          <NewsBox data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default News;
