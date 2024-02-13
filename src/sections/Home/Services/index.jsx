import Shield from "../../../assets/images/Home/sheild.png";
import Tool from "../../../assets/images/Home/tool.png";
import Megaphone from "../../../assets/images/Home/megaphone.png";

import "./style.scss";

function Services() {
  return (
    <div className="services">
      <h1 className="services__title">Услуги</h1>

      <div className="services__container">
        <div className="services__container-box">
          <img
            className="services__container-box_image"
            src={Shield}
            alt="shield"
          />
          <h3 className="services__container-box_title">
            Условия <br /> гарантии
          </h3>
          <p className="services__container-box_info">
            Получить информацию <br /> об условиях гарантии по <br /> продуктам
          </p>
        </div>
        <div className="services__container-box">
          <img
            className="services__container-box_image"
            src={Megaphone}
            alt="shield"
          />
          <h3 className="services__container-box_title">
            Условия <br /> гарантии
          </h3>
          <p className="services__container-box_info">
            Получить информацию <br /> об условиях гарантии по <br /> продуктам
          </p>
        </div>
        <div className="services__container-box">
          <img
            className="services__container-box_image"
            src={Tool}
            alt="shield"
          />
          <h3 className="services__container-box_title">
            Условия <br /> гарантии
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
