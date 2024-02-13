/* eslint-disable react/prop-types */
import "../style.css";
import Close from "../../../assets/images/Shared/chevron-left.svg";

function SmallProducts(props) {
  const smallProducts = props.smallProducts;

  return (
    <div className="filter__products-container">
      <div className="filter__products-heading">
        <h2 className="filter__products-title">
          Крупная Мелкая <br /> техника
        </h2>
        <img className="filter__products-icon" src={Close} alt="Close" />
      </div>

      {smallProducts.map((item, index) => (
        <div className="filter__products-box" key={index}>
          <h3 className="filter__products-box_title">{item.productName}</h3>
          <span className="filter__products-box_result">{item.result}</span>
        </div>
      ))}
    </div>
  );
}

export default SmallProducts;
