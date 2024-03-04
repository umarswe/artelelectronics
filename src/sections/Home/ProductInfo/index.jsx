import ProductInformation from "../../../assets/images/Home/product-info.svg";
import Edition from "../../../assets/images/Home/edition.svg";
import Features from "../../../assets/images/Home/features.svg";
import Refregerator from "../../../assets/images/Home/refregerator.png";
import Play from "../../../assets/images/Home/Play.svg";

import "./style.css";

function ProductInfo() {
  return (
    <div className="product">
      <div className="product__image-wrapper">
        <div className="product__image-shadow">
          <img className="product__image" src={Refregerator} alt="product" />
        </div>
      </div>
      <div className="product__info">
        <div className="product__info-edition_wrapper">
          <div className="product__info-edition">
            <img
              className="product__info-edition_image"
              src={Edition}
              alt="Edition"
            />
          </div>
        </div>
        <div className="product__info-features_wrapper">
          <div className="product__info-features">
            <img
              className="product__info-features_image"
              src={Features}
              alt="Features"
            />
          </div>
        </div>
        <div className="product__info-desc_wrapper">
          <div className="product__info-desc">
            <img
              className="product__info-desc_image"
              src={ProductInformation}
              alt="Product info"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
