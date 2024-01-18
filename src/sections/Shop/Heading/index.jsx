import Gaz from "../../../assets/images/shop-gaz.png";
import TV from "../../../assets/images/shop-tv.png";
import Washing from "../../../assets/images/shop-washing.png";

import "./style.css";

function Heading() {
  return (
    <div className="shop">
      <h1 className="shop__heading">
        Надёжная бытовая техника <br /> для вашего дома
      </h1>

      <div className="shop__image-container">
        <div className="shop__image-wrapper">
          <div className="shop__image-wrapper-box">
            <img src={Gaz} alt="" />
            <h3 className="shop__image-wrapper-box_title">
              Для <br /> кухни
            </h3>
          </div>
        </div>
        <div className="shop__image-wrapper">
          <div className="shop__image-wrapper-box">
            <img src={TV} alt="" />
            <h3 className="shop__image-wrapper-box_title">
              Для <br /> гостиной
            </h3>
          </div>
        </div>
        <div className="shop__image-wrapper">
          <div className="shop__image-wrapper-box">
            <img src={Washing} alt="" />
            <h3 className="shop__image-wrapper-box_title">
              Для стирки <br />и уборки
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
