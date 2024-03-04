import Shield from "../../../assets/images/Home/sheild.png";
import Tool from "../../../assets/images/Home/tool.png";
import Megaphone from "../../../assets/images/Home/megaphone.png";

import "./style.css";

function Services() {
  return (
    <div className="services">
      <h1 className="services__title">Услуги</h1>

      <div className="services__container">
        <div className="services__container-box">
          <div className="service__icon-wrapper">
            <img className="services__icon-image" src={Shield} alt="shield" />
          </div>

          <h3 className="services__container-box_title">Сервис</h3>
          <p className="services__container-box_info">
            Получить информацию <br /> об условиях гарантии по <br /> продуктам
          </p>
        </div>
        <div className="services__container-box">
          <div className="service__icon-wrapper">
            <img
              className="services__icon-image"
              src={Megaphone}
              alt="shield"
            />
          </div>

          <h3 className="services__container-box_title">Гарантия</h3>
          <p className="services__container-box_info">
            Получить информацию <br /> об условиях гарантии по <br /> продуктам
          </p>
        </div>
        <div className="services__container-box">
          <div className="service__icon-wrapper">
            <img className="services__icon-image" src={Tool} alt="shield" />
          </div>

          <h3 className="services__container-box_title">
            Аксессуары и запчасти
          </h3>
          <p className="services__container-box_info">
            Получить информацию <br /> об условиях гарантии по <br /> продуктам
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
