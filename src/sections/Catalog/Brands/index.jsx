/* eslint-disable no-unused-vars */
import "./style.css";
import Artel from "../../../assets/images/Logo_Artel.svg";
import Shivaki from "../../../assets/images/Logo_Shivaki.svg";
import Royal from "../../../assets/images/Logo_Royal.svg";
import Avalon from "../../../assets/images/Logo_Avalon.svg";
import Vesta from "../../../assets/images/Logo_Vesta.svg";
import Samsung from "../../../assets/images/Logo_Samsung.svg";
import { useRef, useState } from "react";

const brands = [Artel, Shivaki, Royal, Avalon, Vesta, Samsung];

function Brands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);

  const handleIndicator = (index, e) => {
    setActiveIndex(index);

    indicatorRef.current.style.left = e.target.offsetLeft - 120 + "px";
    indicatorRef.current.style.width = e.target.offsetWidth + "px";
  };

  return (
    <div className="catalog__brands" id="catalog-brands">
      <div className="indicatorWrapper">
        <div className="indicator" ref={indicatorRef}></div>
      </div>
      <div className="catalog__brands-image">
        {brands.map((item, index) => (
          <div
            className={`catalog__brands-image_wrapper ${
              index === activeIndex ? "active" : ""
            }`}
            key={index}
            onClick={(e) => handleIndicator(index, e)}
          >
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
