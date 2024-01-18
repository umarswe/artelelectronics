import ProductInformation from "../../../assets/images/product-info.svg";
import Edition from "../../../assets/images/edition.svg";
import Features from "../../../assets/images/features.svg";
import Refregerator from "../../../assets/images/refregerator.png";
import Play from "../../../assets/images/Play.svg";

import "./style.css";

function ProductInfo() {
  return (
    <div className="product">
      <div className="product__image">
        <img src={Refregerator} alt="product" />
      </div>
      <div className="product__info">
        <img src={Edition} alt="Edition" />
        <img className="product__info-features" src={Features} alt="Features" />
        <img src={ProductInformation} alt="Product info" />

        <div className="product__info-buttons">
          <button className="product__info-buttons_watch">
            Посмотреть видео
            <img src={Play} alt="Play" />
          </button>
          <button className="product__info-buttons_more">
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
