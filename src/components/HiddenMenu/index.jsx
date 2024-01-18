import News from "../../assets/images/News.png";
import LivingRoom from "../../assets/images/LivingRoom.png";
import Cleaning from "../../assets/images/Cleaning.png";
import Kitchen from "../../assets/images/Kitchen.png";

import "./style.css";
import { Link } from "react-router-dom";

function HiddenMenu() {
  return (
    <div className="menu">
      <div className="menu__border"></div>
      <div className="menu__items">
        <div className="menu__images">
          <img className="menu__images-news" src={News} alt="news" />

          <img
            className="menu__images-livingroom"
            src={LivingRoom}
            alt="LivingRoom"
          />
          <div className="images__box">
            <img
              className="menu__images-cleaning"
              src={Cleaning}
              alt="Cleaning"
            />
            <img className="menu__images-kitchen" src={Kitchen} alt="Kitchen" />
          </div>
        </div>
        <div className="menu__about">
          <ul className="menu__about-list">
            <li>О компании</li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>Где купить</li>
            <li>Производство</li>
            <li>Скачать каталог</li>
            <li>Скачать инструкцию</li>
            <li>Наши контакты</li>
          </ul>
          <ul className="menu__about-list">
            <li>Сервис</li>
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