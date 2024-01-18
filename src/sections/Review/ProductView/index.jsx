import "./style.css";
import downloadSVG from "../../../assets/images/download.svg";
import productViewImage from "../../../assets/images/Product-view-image.png";

function ProductView() {
  return (
    <div className="product__view">
      <div className="product__view-wrapper">
        <h2 className="product__view-title">
          Автоматическая стиральная <br /> машина Artel Grand Inverter <br />
          WF85l2311E
        </h2>
        <button href="#" className="product__view-action">
          <img src={downloadSVG} alt="" />
          <span>Скачать инструкцию</span>
        </button>
      </div>

      <div className="product__view-image">
        <img src={productViewImage} alt="" />
      </div>
    </div>
  );
}

export default ProductView;
