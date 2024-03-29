import News from "../../assets/images/News/News.png";
import LivingRoom from "../../assets/images/Menu/LivingRoom.png";
import Cleaning from "../../assets/images/Menu/Cleaning.png";
import Kitchen from "../../assets/images/Menu/Kitchen.png";

import "./style.scss";
import { Link } from "react-router-dom";

function HiddenMenu() {
  return (
    <div className="menu">
      <div className="menu__border"></div>
      <div className="menu__items">
        <div className="menu__images">
          <div className="menu__images-wrapper">
            <img className="menu__images-news" src={News} alt="news" />
          </div>
          <div className="menu__images-wrapper">
            <img
              className="menu__images-livingroom"
              src={LivingRoom}
              alt="LivingRoom"
            />
          </div>
          <div className="images__box">
            <div className="menu__images-wrapper">
              <img
                className="menu__images-cleaning"
                src={Cleaning}
                alt="Cleaning"
              />
            </div>
            <div className="menu__images-wrapper">
              <img
                className="menu__images-kitchen"
                src={Kitchen}
                alt="Kitchen"
              />
            </div>
          </div>
        </div>
        <div className="menu__about">
          <ul className="menu__about-list">
            <Link to="/about-us">
              <li>О компании</li>
            </Link>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <Link to="/where-buy">
              <li>Где купить</li>
            </Link>
            <li>Производство</li>
            <Link to="/catalog">
              <li>Скачать каталог</li>
            </Link>
            <li>Скачать инструкцию</li>
            <li>
              <Link to="/contact">Наши контакты</Link>
            </li>
          </ul>
          <ul className="menu__about-list">
            <Link to="/service">
              <li>Сервис</li>
            </Link>
            <li>Гарантия</li>
            <li>Аксессуары и запчасти</li>
            <li>Заявка на ремонт</li>
            <li>Зарегистрировать продукт</li>
            <li>Мои продукты</li>
            <li>Проверить статус</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HiddenMenu;
