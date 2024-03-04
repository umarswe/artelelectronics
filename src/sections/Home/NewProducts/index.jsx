import Television from "../../../assets/images/Home/televison.png";

import "./style.css";

function News() {
  return (
    <div className="new__products">
      <h1 className="new__products-title">Новинки</h1>

      <div className="new__products-container">
        <div className="new__products-item">
          <div className="new__products-img_wrapper">
            <div className="news__products-img">
              <img src={Television} alt="air-conditioner" />
            </div>
          </div>
          <p className="new__products-item_description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <button className="new__products-item_action">Узнать больше</button>
        </div>

        <div className="new__products-item">
          <div className="new__products-img_wrapper">
            <div className="news__products-img">
              <img src={Television} alt="air-conditioner" />
            </div>
          </div>
          <p className="new__products-item_description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <button className="new__products-item_action">Узнать больше</button>
        </div>

        <div className="new__products-item">
          <div className="new__products-img_wrapper">
            <div className="news__products-img">
              <img src={Television} alt="air-conditioner" />
            </div>
          </div>
          <p className="new__products-item_description">
            Инверторный кондиционер <br /> Artel Baraka Inverter
          </p>
          <button className="new__products-item_action">Узнать больше</button>
        </div>
      </div>
    </div>
  );
}

export default News;
