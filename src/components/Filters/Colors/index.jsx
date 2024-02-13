/* eslint-disable react/prop-types */
import "../style.css";
import Close from "../../../assets/images/chevron-left.svg";

function Colors(props) {
  const colors = props.colors;

  return (
    <div className="filter__products-container">
      <div className="filter__products-heading">
        <h2 className="filter__products-title">Цвет</h2>
        <img className="filter__products-icon" src={Close} alt="Close" />
      </div>

      {colors.map((item, index) => (
        <div className="filter__colors-box" key={index}>
          <img
            className="filter__products-box_result"
            src={item.color}
            alt="color"
          />
          <h3 className="filter__products-box_title">{item.colorName}</h3>
        </div>
      ))}
    </div>
  );
}

export default Colors;
