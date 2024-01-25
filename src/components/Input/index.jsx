import { useState } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
function Input({ label, column, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="form__input-wrapper" style={{ gridColumn: column }}>
      <label className="form__input-label" htmlFor="">
        {label}
      </label>
      <input
        className="form__input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
