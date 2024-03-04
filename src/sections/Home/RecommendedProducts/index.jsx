import Recommended1 from "../../../assets/images/Home/Recommended-1.png";
import Recommended2 from "../../../assets/images/Home/Recommended-2.png";
import Recommended3 from "../../../assets/images/Home/Recommended-3.png";
import "./style.css";

function RecommendedProduct() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Продуктовые решения</h1>

      <div className="recommended__products">
        <div className="recommended__products-box">
          <div className="recommended__product-box_img-wrapper">
            <img
              className="recommended__image"
              src={Recommended1}
              alt="recommended product"
            />
          </div>

          <p className="recommended__products-box_info">
            Для <br /> кухни
          </p>
        </div>
        <div className="recommended__products-box">
          <div className="recommended__product-box_img-wrapper">
            <img
              className="recommended__image"
              src={Recommended2}
              alt="recommended product"
            />
          </div>

          <p className="recommended__products-box_info">
            Для <br /> гостиной
          </p>
        </div>
        <div className="recommended__products-box">
          <div className="recommended__product-box_img-wrapper">
            <img
              className="recommended__image"
              src={Recommended3}
              alt="recommended product"
            />
          </div>

          <p className="recommended__products-box_info">
            Для стирки <br /> и уборки
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendedProduct;
