import "./style.css";
import downloadSVG from "../../../assets/images/Shared/download.svg";
import productViewImage from "../../../assets/images/Review/Product-view-image.png";

function ProductView() {
  return (
    <div className="product__view">
      <div className="product__view-wrapper">
        <h2 className="product__view-title">
          Автоматическая стиральная <br /> машина Artel Grand Inverter <br />
          WF85l2311E
        </h2>
        <button href="#" className="product__view-action">
          <img src={downloadSVG} alt="Download Icon" />
          <span>Скачать инструкцию</span>
        </button>
      </div>

      <div className="product__view-image">
        <img src={productViewImage} alt="Product view" />
      </div>
    </div>
  );
}

export default ProductView;
