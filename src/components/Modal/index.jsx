import "./style.css";
// import ModalImage from "../../assets/images/benefits-image-2.png";
import Close from "../../assets/images/Close.svg";
import leftArrow from "../../assets/images/Arrow.svg";
import { useRef } from "react";
import Stories from "../Stories";

function Modal() {
  const modalRef = useRef(null);

  const handleClose = () => {
    modalRef.current.classList.toggle("modal__hidden");
  };

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal__wrapper">
        <div className="left__arrow">
          <img src={leftArrow} alt="" />
        </div>
        <div className="right__arrow">
          <img src={leftArrow} alt="" />
        </div>
        <div className="modal__close" onClick={handleClose}>
          <img src={Close} alt="" />
        </div>
        <div className="modal__image-container">
          {/* <img className="modal__image" src={ModalImage} alt="" />
          <p className="modal__image-text">
            Холодильник Artel обеспечивается равномерное распространение
            холодной температуры от задней стенки к дверце холодильника, чтобы
            каждый продукт дольше оставался свежим.
          </p> */}
          <Stories />
        </div>
      </div>
    </div>
  );
}

export default Modal;
