import "./style.css";

// eslint-disable-next-line react/prop-types
function Input({ label, column }) {
  return (
    <div className="form__input-wrapper" style={{ gridColumn: column }}>
      <label className="form__input-label" htmlFor="">
        {label}
      </label>
      <input className="form__input" type="text" />
    </div>
  );
}

export default Input;
