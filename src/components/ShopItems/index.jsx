/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.scss";

function ShopItems(props) {
  const shopItems = props.shopItems;

  return (
    <div className="shop__item-container">
      {shopItems.map((item, index) => (
        <div className="shop__item-box" key={index}>
          {/* <div className="shop__item-box_condition">
            <p className="shop__item-box_condition-text">{item?.condition}</p>
          </div> */}
          <div className="shop__item-box_details">
            <div className="shop__item-box_image">
              <Link to="/review">
                <img src={item.image} alt="" />
              </Link>
            </div>
            <p className="shop__item-box_description">{item.description}</p>
            <button className="shop__item-box_button">{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopItems;
