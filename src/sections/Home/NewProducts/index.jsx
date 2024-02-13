import AirCon from "../../../assets/images/Home/air-conditioner.png";
import WashingMachine from "../../../assets/images/Home/washing-machine.png";
import Television from "../../../assets/images/Home/televison.png";
import Stove from "../../../assets/images/Home/stove.png";

import "./style.css";

function News() {
  return (
    <div className="news">
      <h1 className="news__title">Новинки</h1>

      <div className="news__container">
        <div className="news__container-box">
          <div className="news__container-image">
            <img src={AirCon} alt="AirCon" />
          </div>
          <p className="news__container-description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <div className="news__container-colors">
            <span className="news__container-colors_white"></span>
            <span className="news__container-colors_gray"></span>
            <span className="news__container-colors_black"></span>
          </div>
          <button className="news__container-button">Узнать больше</button>
        </div>
        <div className="news__container-box">
          <div className="news__container-image">
            <img src={WashingMachine} alt="Washing Machine" />
          </div>
          <p className="news__container-description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <div className="news__container-colors">
            <span className="news__container-colors_white"></span>
            <span className="news__container-colors_gray"></span>
            <span className="news__container-colors_black"></span>
          </div>
          <button className="news__container-button">Узнать больше</button>
        </div>
        <div className="news__container-box">
          <div className="news__container-image">
            <img src={Television} alt="Television" />
          </div>
          <p className="news__container-description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <div className="news__container-colors">
            <span className="news__container-colors_white"></span>
            <span className="news__container-colors_gray"></span>
            <span className="news__container-colors_black"></span>
          </div>
          <button className="news__container-button">Узнать больше</button>
        </div>
        <div className="news__container-box">
          <div className="news__container-image">
            <img src={Stove} alt="Stove" />
          </div>
          <p className="news__container-description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <div className="news__container-colors">
            <span className="news__container-colors_white"></span>
            <span className="news__container-colors_gray"></span>
            <span className="news__container-colors_black"></span>
          </div>
          <button className="news__container-button">Узнать больше</button>
        </div>
      </div>
    </div>
  );
}

export default News;
