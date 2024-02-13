/* eslint-disable react/prop-types */
import "../style.css";
import Close from "../../../assets/images/chevron-left.svg";

function Brands(props) {
  const brandsData = props.brands;
  return (
    <div className="filter__products-container">
      <div className="filter__products-heading">
        <h2 className="filter__products-title">бренды</h2>
        <img className="filter__products-icon" src={Close} alt="Close" />
      </div>

      {brandsData.map((item, index) => (
        <div key={index} className="filter__products-box brands__box">
          <img
            className="filter__product-box_image"
            src={item.brands}
            alt="brands"
          />
          <span className="filter__products-box_result">{item.result}</span>
        </div>
      ))}
    </div>
  );
}

export default Brands;
