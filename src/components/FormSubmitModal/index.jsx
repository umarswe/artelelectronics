import "./style.css";
import Tick from "../../assets/images/tick.png";
import Close from "../../assets/images/Close.svg";

// eslint-disable-next-line react/prop-types
function FormSubmitModal({ formSubmit }) {
  const handleCloseModal = () => {
    // eslint-disable-next-line react/prop-types
    formSubmit.current.classList.remove("visibility");
    console.log("clicked");
  };

  return (
    <div className="submit" ref={formSubmit}>
      <div className="submit__wrapper">
        <div className="submit__close-button" onClick={handleCloseModal}>
          <img src={Close} alt="" />
        </div>
        <div className="submit__completion">
          <img className="submit__completion-icon" src={Tick} alt="" />
          <h5 className="submit__completion-title">Заявка отправлена</h5>
          <p className="submit__completion-text">Мы скоро с вами свяжемся </p>
        </div>

        <button
          className="submit__completion-button"
          onClick={handleCloseModal}
        >
          Отлично
        </button>
      </div>
    </div>
  );
}

export default FormSubmitModal;
