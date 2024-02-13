import Logo from "../../assets/images/Shared/Artel-logo.svg";
import facebook from "../../assets/images/Shared/facebook.svg";
import instagram from "../../assets/images/Shared/instagram.svg";
import twitter from "../../assets/images/Shared/twitter.svg";
import Phone from "../../assets/images/Shared/Phone-small.svg";
import mail from "../../assets/images/Shared/mail.svg";

import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__media">
        <div className="footer__media-social">
          <div className="footer__media-social-wrapper">
            <img className="footer__media-social_logo" src={Logo} alt="Logo" />
            <div className="footer__media-social_links">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <p className="footer__media-social-year">© 2023 Artel</p>
        </div>

        <div className="footer__media-links">
          <ul>
            <li>О компании</li>
            <li>Новости</li>
            <li>Где купить</li>
            <li>Мой профиль</li>
            <li>Скачать католог</li>
            <li>Скачать инструкцию</li>
            <li>Наши контакты</li>
          </ul>
          <ul>
            <li>Сервис</li>
            <li>Гарантия</li>
            <li>Аксессуары и запчасти</li>
            <li>Заявка на ремонт</li>
            <li>Зарегистрировать продукт</li>
            <li>Мои продукты</li>
          </ul>
        </div>
      </div>
      <div className="footer__contact">
        <h2 className="footer__contact-title">Наши контакты</h2>
        <div className="footer__contact-links">
          <div className="footer__contact-links_wrapper">
            <img src={Phone} alt="Phone" /> <span>0800-120-55</span>
          </div>
          <div className="footer__contact-links_wrapper">
            <img src={mail} alt="Email" /> <span>info@artel.uz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
