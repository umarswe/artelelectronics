/* eslint-disable react/prop-types */

import { useRef } from "react";
import ImageReviewModal from "../ImageReviewModal";
import "./style.scss";

function ShopItems(props) {
  const shopItems = props.shopItems;
  const imageReviewRef = useRef(null);

  const handleOpenReviewModal = () => {
    imageReviewRef.current.style.visibility = "visible";
  };

  return (
    <div className="shop__item-container">
      {shopItems.map((item, index) => (
        <div className="shop__item-box" key={index}>
          {/* <div className="shop__item-box_condition">
            <p className="shop__item-box_condition-text">{item?.condition}</p>
          </div> */}
          <div className="shop__item-box_details">
            <div
              className="shop__item-box_image"
              onClick={handleOpenReviewModal}
            >
              <img src={item.image} alt="" />
            </div>
            <p className="shop__item-box_description">{item.description}</p>
            <button className="shop__item-box_button">{item.buttonText}</button>
          </div>
        </div>
      ))}

      <ImageReviewModal imageReviewRef={imageReviewRef} />
    </div>
  );
}

export default ShopItems;
