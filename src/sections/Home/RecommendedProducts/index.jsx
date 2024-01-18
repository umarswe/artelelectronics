import Recommended1 from "../../../assets/images/Recommended-1.png";
import Recommended2 from "../../../assets/images/Recommended-2.png";
import Recommended3 from "../../../assets/images/Recommended-3.png";
import "./style.css";

function RecommendedProduct() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Рекомендуемые товары</h1>

      <div className="recommended__products">
        <div className="recommended__products-box">
          <img src={Recommended1} alt="recommended product" />
          <div className="recommended__products-box_info">
            <p className="recommended__products-box_info-text">
              стиральная машина <br /> Artel Grand Inverter
            </p>
          </div>
        </div>
        <div className="recommended__products-box">
          <img src={Recommended2} alt="recommended product" />
          <div className="recommended__products-box_info">
            <p className="recommended__products-box_info-text">
              Телевизор Artel <br /> (216 см) Android
            </p>
          </div>
        </div>
        <div className="recommended__products-box">
          <img src={Recommended3} alt="recommended product" />
          <div className="recommended__products-box_info">
            <p className="recommended__products-box_info-text">
              Мешковой пылесос <br /> Artel VCB 4537
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedProduct;
