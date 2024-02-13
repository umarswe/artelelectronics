/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./style.css";
import Arrow from "../../assets/images/arrow-white.svg";

function FormInputSelectModal({ label, options, onSelect, updatePhoneNumber }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const openIconRef = useRef(null);
  const modalOpenRef = useRef(null);

  const handleOpen = () => {
    openIconRef.current.classList.toggle("rotate");
    modalOpenRef.current.classList.toggle("visibility");
  };

  const handleSelect = (option) => {
    onSelect(option);
    setSelectedOption(option);
    updatePhoneNumber(option);
  };

  return (
    <div className="select" onClick={handleOpen}>
      <label className="contact__select-label" htmlFor="select-countries">
        {label}
      </label>
      <div className="select__input-wrapper">
        <input className="select__input" value={selectedOption} />
        <span className="select__input-icon" ref={openIconRef}>
          <img src={Arrow} alt="Arrow" />
        </span>
      </div>

      <div className="select__modal-options" ref={modalOpenRef}>
        <ul className="select__modal-lists">
          {options.map((option, index) => (
            <li
              key={index}
              className="modal__list-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormInputSelectModal;
