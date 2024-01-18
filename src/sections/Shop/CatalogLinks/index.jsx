import Search from "../../../assets/images/Search.svg";
import "./style.css";

function CatalogLinks() {
  return (
    <div className="catalog__links">
      <div className="catalog__links-container">
        <ul className="catalog__links-wrapper">
          <li>Каталог товаров</li>
          <li>Все</li>
          <li>Для гостиной </li>
          <li>Для стирки и уборки </li>
          <li>Для кухни </li>
          <li>Хитовые товары</li>
          <li>Новинки</li>
        </ul>

        <button className="catalog__links-search">
          <p>Поиск по сайту</p>
          <img src={Search} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default CatalogLinks;
